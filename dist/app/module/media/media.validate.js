"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaValidations = void 0;
const zod_1 = require("zod");
const createMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        news_id: zod_1.z.string(),
        media_type: zod_1.z.string(),
        url: zod_1.z.string(),
    }),
});
const updateMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        news_id: zod_1.z.string().optional(),
        media_type: zod_1.z.string().optional(),
        url: zod_1.z.string().optional(),
        caption: zod_1.z.string().optional(),
    }),
});
exports.mediaValidations = {
    createMediaValidationSchema,
    updateMediaValidationSchema,
};
