"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidations = void 0;
const zod_1 = require("zod");
const createCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        lang: zod_1.z.string(),
        type: zod_1.z.string().optional(),
    }),
});
const updateCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        lang: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        position: zod_1.z.number().optional(),
        type: zod_1.z.string().optional(),
    }),
});
exports.categoryValidations = {
    createCategoryValidationSchema,
    updateCategoryValidationSchema,
};
