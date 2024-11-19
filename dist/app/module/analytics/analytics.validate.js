"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsValidations = void 0;
const zod_1 = require("zod");
const createAnalyticsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        news_id: zod_1.z.string(),
        views: zod_1.z.number(),
        likes: zod_1.z.number(),
        dislikes: zod_1.z.number(),
        comments_count: zod_1.z.number(),
    }),
});
const updateAnalyticsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        news_id: zod_1.z.string().optional(),
        views: zod_1.z.number().optional(),
        likes: zod_1.z.number().optional(),
        dislikes: zod_1.z.number().optional(),
        comments_count: zod_1.z.number().optional(),
    }),
});
exports.analyticsValidations = {
    createAnalyticsValidationSchema,
    updateAnalyticsValidationSchema,
};
