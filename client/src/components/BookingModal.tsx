import { useForm } from "react-hook-form";
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

/* ----------------------------------
   FORM TYPES (Plain TypeScript)
---------------------------------- */
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

/* ----------------------------------
   FORM COMPONENT
---------------------------------- */
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
		console.log(values);

		try {
			const res = await fetch(
				import.meta.env.VITE_API_BASE_URL + "/book-session",
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
		<Card className="border-none relative top-20 shadow-2xl bg-white backdrop-blur-sm overflow-hidden">
			<CardHeader className="space-y-1 text-center pb-8 pt-10 bg-gradient-to-b from-primary/10 to-transparent">
				<div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
					<Sparkles className="w-6 h-6 text-primary" />
				</div>
				<CardTitle className="text-3xl font-serif">
					Book Your Session
				</CardTitle>
				<CardDescription>
					Select a service and time for your appointment
				</CardDescription>
			</CardHeader>

			<CardContent className="p-8">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

						{/* NAME */}
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Debleena Dasgupta" />
									</FormControl>
								</FormItem>
							)}
						/>

						{/* PHONE */}
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input {...field} placeholder="(555) 123-4567" />
									</FormControl>
								</FormItem>
							)}
						/>

						{/* SERVICE TYPE */}
						<FormField
							control={form.control}
							name="service"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Service Type</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="grid grid-cols-1 md:grid-cols-3 gap-4"
										>
											{["bridal", "event", "editorial", "other"].map((id) => (
												<FormItem key={id}>
													<FormControl>
														<RadioGroupItem value={id} className="sr-only peer" />
													</FormControl>
													<FormLabel className="flex justify-center rounded-xl border p-4 cursor-pointer peer-data-[state=checked]:border-primary">
														{id}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
								</FormItem>
							)}
						/>

						{/* SERVICE MODE */}
						<FormField
							control={form.control}
							name="serviceMode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Service Mode</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="grid grid-cols-2 gap-4"
										>
											{["home-service", "onsite-service"].map((id) => (
												<FormItem key={id}>
													<FormControl>
														<RadioGroupItem value={id} className="sr-only peer" />
													</FormControl>
													<FormLabel className="flex justify-center rounded-xl border p-4 cursor-pointer peer-data-[state=checked]:border-primary">
														{id}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
								</FormItem>
							)}
						/>

						{/* ADDRESS (conditional) */}
						{form.watch("serviceMode") === "home-service" && (
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Location Address</FormLabel>
										<FormControl>
											<Input {...field} placeholder="123 Main St" />
										</FormControl>
									</FormItem>
								)}
							/>
						)}

						{/* DATE + TIME */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<Button variant="outline" className="w-full">
													{field.value
														? format(field.value, "PPP")
														: "Pick a date"}
													<CalendarIcon className="ml-auto h-4 w-4" />
												</Button>
											</PopoverTrigger>
											<PopoverContent>
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
												/>
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
										<FormLabel>Time</FormLabel>
										<Input {...field} placeholder="10:30 AM" />
									</FormItem>
								)}
							/>
						</div>

						{/* EMAIL */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="jane@example.com" />
									</FormControl>
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
										<Textarea {...field} />
									</FormControl>
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full h-12 text-lg">
							Confirm Booking
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}

export default BookingForm;

