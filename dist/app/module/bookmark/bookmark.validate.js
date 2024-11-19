"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkValidations = void 0;
const zod_1 = require("zod");
const createBookmarkValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string(),
        news_id: zod_1.z.string(),
    }),
});
const updateBookmarkValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string().optional(),
        news_id: zod_1.z.string().optional(),
    }),
});
exports.bookmarkValidations = {
    createBookmarkValidationSchema,
    updateBookmarkValidationSchema,
};
