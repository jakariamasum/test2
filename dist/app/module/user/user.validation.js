"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchemas = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        password: zod_1.z.string().min(3),
        email: zod_1.z.string(),
        role: zod_1.z.enum(["reporter", "admin"]),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        role: zod_1.z.enum(["reporter", "admin"]).optional(),
        img: zod_1.z.string().optional(),
    }),
});
exports.userValidationSchemas = {
    createUserValidationSchema,
    updateUserValidationSchema,
};
