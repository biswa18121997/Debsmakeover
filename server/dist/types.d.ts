import { Document } from 'mongoose';
export declare enum ServiceType {
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
    additionalNotes: string;
    serviceType: ServiceType;
}
//# sourceMappingURL=types.d.ts.map