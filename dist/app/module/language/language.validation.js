"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageValidations = void 0;
const zod_1 = require("zod");
const languageValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        language_code: zod_1.z.string(),
        language_type: zod_1.z.enum(["0", "1"]).default("1"),
    }),
});
const updateLanguageValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        language_code: zod_1.z.string().optional(),
        language_type: zod_1.z.enum(["0", "1"]).default("1").optional(),
    }),
});
exports.languageValidations = {
    languageValidationSchema,
    updateLanguageValidationSchema,
};
