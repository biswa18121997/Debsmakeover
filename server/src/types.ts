import mongoose, { Document } from 'mongoose';

export enum ServiceType {
	MAKEUP = "makeup",
	HAIRSTYLING = "hairstyling",
	BRIDAL = "bridal",
	GROOMING = "grooming"
}

export interface BookingsType extends Document {
	customerName: string;
	customerMobile: string;
	customerEmail: string;
	bookingDate: Date;
	bookingForDate: Date;
	bookingForTime: string;
	serviceMode: string;
	AdditionalNotes: string;
	serviceType: ServiceType;  // <-- enum
}

