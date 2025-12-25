import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";


// ----------------------------------------------------
// ✅ ZOD SCHEMA WITH CONDITIONAL ADDRESS VALIDATION
// ----------------------------------------------------
const formSchema = z
	.object({
		service: z.enum(["bridal", "event", "editorial"], {
			required_error: "Please select a service type.",
		}),
		date: z.date({ required_error: "Please select a date." }),
		time: z.string().min(1, "Please select a time."),
		name: z.string().min(2, "Name must be at least 2 characters."),
		email: z.string().email("Please enter a valid email."),
		phone: z.string().min(10, "Please enter a valid phone number."),
		serviceMode: z.enum(["home-service", "onsite-service"]),
		address: z.string().optional(),
		notes: z.string().optional(),
	})
	.superRefine((data, ctx) => {
		if (data.serviceMode === "home-service" && (!data.address || data.address.trim() === "")) {
			ctx.addIssue({
				path: ["address"],
				code: z.ZodIssueCode.custom,
				message: "Address is required for home service.",
			});
		}
	});


// ----------------------------------------------------
// ✅ FORM COMPONENT
// ----------------------------------------------------
function BookingForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			service: undefined,
			date: undefined,
			time: "",
			name: "",
			email: "",
			phone: "",
			serviceMode: undefined,
			address: "",
			notes: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		try {
			let requestToServer = await fetch(import.meta.env.VITE_API_BASE_URL + '/book-session', {
				'method': 'POST',
				'Content-type': 'application/json',
				'Body': JSON.stringify({ bookingData: values })
			});
			let responseInJson = await requestToServer?.json();
			if (responseInJson?.success && responseInJson.message) {
				toast.success("Booking Request Sent", {
					description: "We've received your request and will confirm shortly.",
				});

			}
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<Card className="border-none relative top-20 shadow-2xl bg-white backdrop-blur-sm overflow-hidden">
			<CardHeader className="space-y-1 text-center pb-8 pt-10 bg-gradient-to-b from-primary/10 to-transparent">
				<div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
					<Sparkles className="w-6 h-6 text-primary" />
				</div>
				<CardTitle className="text-3xl font-serif text-foreground">
					Book Your Session
				</CardTitle>
				<CardDescription className="text-base font-sans">
					Select a service and time for your appointment
				</CardDescription>
			</CardHeader>

			<CardContent className="p-8">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

						{/* ------------------------ */}
						{/* SERVICE TYPE */}
						{/* ------------------------ */}
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Debleena Dasgupta"
											{...field}
											className="h-12 rounded-lg border-input/50 bg-background hover:bg-accent/50"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input
											placeholder="(555) 123-4567"
											{...field}
											className="h-12 rounded-lg border-input/50 bg-background hover:bg-accent/50"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="service"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormLabel className="text-base font-medium">Service Type</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="grid grid-cols-1 md:grid-cols-3 gap-4"
										>
											{[
												{ id: "bridal", title: "Bridal" },
												{ id: "event", title: "Special Event" },
												{ id: "editorial", title: "Editorial" },
											].map((item) => (
												<FormItem key={item.id}>
													<FormControl>
														<RadioGroupItem value={item.id} className="peer sr-only" />
													</FormControl>
													<FormLabel className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all duration-200">
														<span className="text-lg font-serif font-medium mb-1">{item.title}</span>
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>


						{/* ------------------------ */}
						{/* SERVICE MODE */}
						{/* ------------------------ */}
						<FormField
							control={form.control}
							name="serviceMode"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormLabel className="text-base font-medium">Service Mode</FormLabel>

									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="grid grid-cols-1 md:grid-cols-2 gap-4"
										>
											{[
												{ id: "home-service", title: "Home Service" },
												{ id: "onsite-service", title: "Walk-in / On-site" },
											].map((item) => (
												<FormItem key={item.id}>
													<FormControl>
														<RadioGroupItem value={item.id} className="peer sr-only" />
													</FormControl>

													<FormLabel className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all duration-200">
														<span className="text-lg font-serif font-medium mb-1">
															{item.title}
														</span>
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						{/* ADDRESS (conditional-required) */}
						{form.watch('serviceMode') == 'home-service' && <FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Location Address</FormLabel>
									<FormControl>
										<Input
											placeholder="123 Main St, City, State"
											{...field}
											className="h-12 rounded-lg border-input/50 bg-background hover:bg-accent/50"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>}


						{/* ------------------------ */}
						{/* DATE + PHONE */}
						{/* ------------------------ */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

							{/* DATE PICKER */}
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild className="bg-gray-200">
												<FormControl>
													<Button
														variant="outline"
														className={cn(
															"w-full pl-3 text-left font-normal h-12 rounded-lg border-input/50  bg-gray-200 ",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value ? format(field.value, "PPP") : "Pick a date"}
														<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>

											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													className="bg-neutral-200"
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													initialFocus
												/>
											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>

							{/* TIME PICKER */}
							{/* TIME PICKER (12-hour with AM/PM) */}
							<FormField
								control={form.control}
								name="time"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Time</FormLabel>

										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														className={cn(
															"w-full pl-3 text-left font-normal h-12 rounded-lg border-input/50 bg-gray-200",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value || "Pick a time"}
													</Button>
												</FormControl>
											</PopoverTrigger>

											<PopoverContent className="w-56 p-4 space-y-3">

												{/* Hour Selector */}
												<div className="flex items-center justify-between gap-2">
													<select
														className="w-1/3 p-2 rounded-lg bg-gray-200"
														value={field.value?.split(" ")[0]?.split(":")[0] || ""}
														onChange={(e) => {
															const minute = field.value?.split(" ")[0]?.split(":")[1] || "00";
															const period = field.value?.split(" ")[1] || "AM";
															field.onChange(`${e.target.value}:${minute} ${period}`);
														}}
													>
														<option value="">HH</option>
														{Array.from({ length: 12 }, (_, i) => {
															const val = (i + 1).toString().padStart(2, "0");
															return (
																<option key={val} value={val}>
																	{val}
																</option>
															);
														})}
													</select>

													{/* Minute Selector */}
													<select
														className="w-1/3 p-2 rounded-lg bg-gray-200"
														value={field.value?.split(" ")[0]?.split(":")[1] || ""}
														onChange={(e) => {
															const hour = field.value?.split(" ")[0]?.split(":")[0] || "01";
															const period = field.value?.split(" ")[1] || "AM";
															field.onChange(`${hour}:${e.target.value} ${period}`);
														}}
													>
														<option value="">MM</option>
														{Array.from({ length: 60 }, (_, i) => {
															const val = i.toString().padStart(2, "0");
															return (
																<option key={val} value={val}>
																	{val}
																</option>
															);
														})}
													</select>

													{/* AM/PM */}
													<select
														className="w-1/3 p-2 rounded-lg bg-gray-200"
														value={field.value?.split(" ")[1] || "AM"}
														onChange={(e) => {
															const [hour = "01", minute = "00"] =
																field.value?.split(" ")[0]?.split(":") || [];
															field.onChange(`${hour}:${minute} ${e.target.value}`);
														}}
													>
														<option value="AM">AM</option>
														<option value="PM">PM</option>
													</select>
												</div>

											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>



							{/* PHONE */}
						</div>


						{/* EMAIL */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address</FormLabel>
									<FormControl>
										<Input
											placeholder="jane@example.com"
											{...field}
											className="h-12 rounded-lg border-input/50 bg-background hover:bg-accent/50"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>





						{/* NOTES */}
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Additional Notes</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any specific looks, allergies, or instructions..."
											className="resize-none min-h-[100px] rounded-lg border-input/50 bg-background hover:bg-accent/50"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className="w-full h-12 text-lg font-medium rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all"
						>
							Confirm Booking
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}


// ----------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------
export default function BookingPage() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden ">
			<div className="absolute inset-0 z-0">
				<img
					src="/download (3).png"
					alt="Background"
					className="w-full h-full object-cover opacity-70"
				/>
				<div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/40 to-transparent" />
			</div>

			<div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-700">


				<BookingForm />

				<div className="mt-8 text-center text-sm text-muted-foreground font-sans">
					<p>© 2024 Lumina Artistry. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
}

