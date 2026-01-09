import mongoose from "mongoose";
export declare const Inquiry: mongoose.Model<{
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        phone: string;
        notes: string;
        inquiryFor: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        phone: string;
        notes: string;
        inquiryFor: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    phone: string;
    notes: string;
    inquiryFor: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Inquiry.d.ts.map