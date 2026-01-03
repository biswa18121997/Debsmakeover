import { useForm } from "react-hook-form";
import { CalendarIcon, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { SEO } from '../utils/SEO';

type BookingFormValues = {
	name: string;
	phone: string;
	email: string;
	service?: string;
	serviceMode?: string;
	address?: string;
	date?: Date;
	time?: string;
	notes?: string;
};

function BookingForm() {
	const form = useForm<BookingFormValues>({
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			service: undefined,
			serviceMode: undefined,
			address: "",
			date: undefined,
			time: "",
			notes: "",
		},
	});

	async function onSubmit(values: BookingFormValues) {
		try {
			const res = await fetch(
				import.meta.env.VITE_API_BASE_URL + "/book-now",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ bookingData: values }),
				}
			);
			const data = await res.json();
			if (data?.success) {
				toast.success("Booking Request Sent", {
					description: "We've received your request and will confirm shortly.",
				});
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-no-repeat bg-center  bg-fixed bg-center bg-[url(https://res.cloudinary.com/dfvng2adb/image/upload/v1766778492/fph0dcpatn4zmokyutho.png)]">
			{/* Overlay for better text readability if needed, but user wanted visibility */}
			<div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-rose-400/40 to-stone-900/60 pointer-events-none" />

			<SEO
				title="Book Bridal & Party Makeup Packages in Kolkata | DebsMakeover"
				description="Check bridal makeup prices and book your appointment with Debleena in Kolkata."
				canonical="https://debsmakeover.vercel.app/book-now"
			/>

			<Card className="w-full max-w-4xl relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl overflow-hidden">
				<CardHeader className="space-y-2 text-center pb-6 pt-8">
					<div className="mx-auto mb-4 p-4 rounded-full bg-white/30 backdrop-blur-sm shadow-inner w-fit ring-1 ring-white/40">
						<Sparkles className="w-8 h-8 text-rose-100" />
					</div>
					<CardTitle className="text-4xl md:text-5xl font-serif text-white tracking-wide drop-shadow-md">Book Your Session</CardTitle>
					<CardDescription className="text-lg text-rose-50 font-light tracking-wider">
						Select a service and time for your appointment
					</CardDescription>
				</CardHeader>

				<CardContent className="p-6 md:p-10 bg-white/40 backdrop-blur-md rounded-t-[2.5rem] mt-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

							{/* SECTION: SERVICE SELECTION */}
							<div className="space-y-6">
								<FormField
									control={form.control}
									name="service"
									render={({ field }) => (
										<FormItem className="space-y-4">
											<FormLabel className="text-xl font-serif font-medium text-slate-800">1. Choose Service</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className="grid grid-cols-2 md:grid-cols-4 gap-4"
												>
													{["bridal", "event", "editorial", "other"].map((id) => (
														<FormItem key={id}>
															<FormControl>
																<RadioGroupItem value={id} className="sr-only peer" />
															</FormControl>
															<FormLabel className="flex justify-center items-center h-full rounded-2xl border border-white/40 bg-white/40 p-4 cursor-pointer transition-all duration-300 hover:bg-white/60 hover:scale-105 peer-data-[state=checked]:border-rose-400 peer-data-[state=checked]:bg-rose-100 peer-data-[state=checked]:text-rose-900 peer-data-[state=checked]:shadow-md text-center font-medium text-slate-700">
																{id.charAt(0).toUpperCase() + id.slice(1)}
															</FormLabel>
														</FormItem>
													))}
												</RadioGroup>
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="serviceMode"
									render={({ field }) => (
										<FormItem className="space-y-4">
											<FormLabel className="text-xl font-serif font-medium text-slate-800">2. Service Mode</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className="grid grid-cols-1 md:grid-cols-2 gap-4"
												>
													{["home-service", "onsite-service"].map((id) => (
														<FormItem key={id}>
															<FormControl>
																<RadioGroupItem value={id} className="sr-only peer" />
															</FormControl>
															<FormLabel className="flex justify-center rounded-2xl border border-white/40 bg-white/40 p-4 cursor-pointer transition-all duration-300 hover:bg-white/60 hover:scale-[1.02] peer-data-[state=checked]:border-rose-400 peer-data-[state=checked]:bg-rose-100 peer-data-[state=checked]:text-rose-900 peer-data-[state=checked]:shadow-md font-medium text-slate-700">
																{id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
															</FormLabel>
														</FormItem>
													))}
												</RadioGroup>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>

							<div className="relative py-4">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-slate-300/50"></span>
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-transparent px-2 text-slate-500 font-serif italic">Details</span>
								</div>
							</div>

							{/* SECTION: PERSONAL DETAILS & LOGISTICS */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-slate-700 font-medium">Full Name</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Debleena Dasgupta" className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl h-12 shadow-sm transition-all" />
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
											<FormControl>
												<Input {...field} placeholder="+91 ..." className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl h-12 shadow-sm transition-all" />
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="date"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="text-slate-700 font-medium">Preferred Date</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<Button variant="outline" className="w-full text-left font-normal bg-white/60 border-white/40 hover:bg-white/80 rounded-xl h-12 shadow-sm">
														{field.value ? format(field.value, "PPP") : <span className="text-slate-500">Pick a date</span>}
														<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
													</Button>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0 rounded-xl shadow-xl border-white/20" align="start">
													<Calendar mode="single" selected={field.value} onSelect={field.onChange} className="bg-white/90 backdrop-blur-xl rounded-xl" />
												</PopoverContent>
											</Popover>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="time"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-slate-700 font-medium">Preferred Time</FormLabel>
											<FormControl>
												<Input {...field} placeholder="10:30 AM" className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl h-12 shadow-sm transition-all" />
											</FormControl>
										</FormItem>
									)}
								/>

								<div className="md:col-span-2">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-slate-700 font-medium">Email Address</FormLabel>
												<FormControl>
													<Input {...field} placeholder="jane@example.com" className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl h-12 shadow-sm transition-all" />
												</FormControl>
											</FormItem>
										)}
									/>
								</div>

								{form.watch("serviceMode") === "home-service" && (
									<div className="md:col-span-2">
										<FormField
											control={form.control}
											name="address"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="text-slate-700 font-medium">Location Address</FormLabel>
													<FormControl>
														<Input {...field} placeholder="Enter your full venue address" className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl h-12 shadow-sm transition-all" />
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
								)}

								<div className="md:col-span-2">
									<FormField
										control={form.control}
										name="notes"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-slate-700 font-medium">Additional Notes</FormLabel>
												<FormControl>
													<Textarea {...field} placeholder="Tell us about your preferences..." className="bg-white/60 border-white/40 focus:bg-white/80 focus:border-rose-300 rounded-xl min-h-[120px] shadow-sm transition-all resize-none" />
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>

							<Button type="submit" className="w-full h-14 text-lg font-serif font-semibold shadow-lg hover:shadow-rose-300/50 hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 border-none">
								Confirm Booking Request
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}

export default BookingForm;

