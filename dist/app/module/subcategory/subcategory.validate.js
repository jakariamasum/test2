"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryValidations = void 0;
const zod_1 = require("zod");
const createSubCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        category: zod_1.z.string(),
        lang: zod_1.z.string(),
    }),
});
const updateSubCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        lang: zod_1.z.string().optional(),
    }),
});
exports.SubCategoryValidations = {
    createSubCategoryValidationSchema,
    updateSubCategoryValidationSchema,
};
