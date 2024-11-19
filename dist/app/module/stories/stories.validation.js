"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storiesValidationSchemas = exports.bannerSchema = void 0;
const zod_1 = require("zod");
exports.bannerSchema = zod_1.z.object({
    img: zod_1.z.string(),
    title: zod_1.z.string().min(1),
});
const createStoriesValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        category: zod_1.z.string().min(1),
        subCategory: zod_1.z.string().optional(),
        banners: zod_1.z.array(exports.bannerSchema).nonempty(),
    }),
});
exports.storiesValidationSchemas = { createStoriesValidationSchema };
