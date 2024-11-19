"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adsValidations = exports.updateAdsValidationSchema = exports.createAdsValidationSchema = exports.AdSectionSchema = void 0;
const zod_1 = require("zod");
exports.AdSectionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    position: zod_1.z.enum(["header", "category", "details"]),
    type: zod_1.z.enum(["code", "images"]),
    content: zod_1.z.union([
        zod_1.z.string().min(1),
        zod_1.z.object({
            image: zod_1.z.string().url().min(1),
            link: zod_1.z.string(),
        }),
    ]),
});
const updateAdSectionSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    position: zod_1.z.enum(["header", "category", "details"]).optional(),
    type: zod_1.z.enum(["code", "images"]).optional(),
    content: zod_1.z.union([
        zod_1.z.string().min(1),
        zod_1.z
            .object({
            image: zod_1.z.string(),
            link: zod_1.z.string(),
        })
            .optional(),
    ]),
});
exports.createAdsValidationSchema = zod_1.z.object({
    body: zod_1.z.array(exports.AdSectionSchema),
});
exports.updateAdsValidationSchema = zod_1.z.object({
    body: zod_1.z.array(updateAdSectionSchema).optional(),
});
exports.adsValidations = {
    createAdsValidationSchema: exports.createAdsValidationSchema,
    updateAdSectionSchema,
};
