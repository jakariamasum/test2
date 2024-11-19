"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsValidations = void 0;
const zod_1 = require("zod");
const LocationSchema = zod_1.z.object({
    city: zod_1.z.string().min(1, "City is required"),
    area: zod_1.z.string().optional(),
});
const CategorySchema = zod_1.z.object({
    category: zod_1.z.string().optional(),
    subCategory: zod_1.z.string().optional(),
});
const updateLocationSchema = zod_1.z.object({
    city: zod_1.z.string().optional(),
    area: zod_1.z.string().optional(),
});
const updateCategorySchema = zod_1.z.object({
    category: zod_1.z.string().optional(),
    subCategory: zod_1.z.string().optional(),
});
const createNewsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        img: zod_1.z.string().optional(),
        category: CategorySchema,
    }),
});
const updateNewsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        img: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        location: updateLocationSchema.optional(),
        category: updateCategorySchema.optional(),
        lang: zod_1.z.string().optional(),
    }),
});
exports.newsValidations = {
    createNewsValidationSchema,
    updateNewsValidationSchema,
};
