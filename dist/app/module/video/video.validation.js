"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoValidationSchemas = void 0;
const zod_1 = require("zod");
const CategorySchema = zod_1.z.object({
    category: zod_1.z.string().min(1, "Category is required"),
    subCategory: zod_1.z.string().optional(),
});
const createVideoValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        video: zod_1.z.string().min(1, "Video ID or URL is required"),
        content: zod_1.z.string().min(1, "Content is required"),
        tags: zod_1.z.array(zod_1.z.string()).nonempty("At least one tag is required"),
        category: CategorySchema,
    }),
});
exports.videoValidationSchemas = {
    createVideoValidationSchema,
};
