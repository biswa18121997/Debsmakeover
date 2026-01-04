import mongoose, { Document } from 'mongoose';

export enum ServiceType {
	EVENT = "event",
	BRIDAL = "bridal",
	//	GROOMING = "grooming",
	EDITORIAL = "editorial",
	OTHER = "other"
}

export interface BookingsType extends Document {
	customerName: string;
	customerMobile: string;
	customerEmail: string;
	bookingDate: Date;
	bookingForDate: Date;
	bookingForTime: string;
	serviceMode: string;
	additionalNotes: string;
	serviceType: ServiceType;  // <-- enum
}

