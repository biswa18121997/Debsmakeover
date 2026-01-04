import mongoose from 'mongoose';
export declare const ContactForm: mongoose.Model<{
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}, mongoose.Document<unknown, {}, {
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
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
        message: string;
        email: string;
        serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        message: string;
        email: string;
        serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, mongoose.FlattenMaps<{
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    name: string;
    message: string;
    email: string;
    serviceInterestedIn: "event" | "bridal" | "editorial" | "other";
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=ContactForm.d.ts.map