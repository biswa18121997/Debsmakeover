import mongoose, { Document } from 'mongoose';
export var ServiceType;
(function (ServiceType) {
    ServiceType["EVENT"] = "event";
    ServiceType["BRIDAL"] = "bridal";
    //	GROOMING = "grooming",
    ServiceType["EDITORIAL"] = "editorial";
    ServiceType["OTHER"] = "other";
})(ServiceType || (ServiceType = {}));
//# sourceMappingURL=types.js.map