"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingValidations = void 0;
const zod_1 = require("zod");
const createSettingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        metaDescription: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        privacy: zod_1.z.string().optional(),
        terms: zod_1.z.string().optional(),
        logo: zod_1.z.string().optional(),
        favicon: zod_1.z.string().optional(),
        lotoImg: zod_1.z.string().optional(),
        metaImg: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        bgColor: zod_1.z.string().optional(),
        copyright: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
    }),
});
const updateSettingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        metaDescription: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        privacy: zod_1.z.string().optional(),
        terms: zod_1.z.string().optional(),
        logo: zod_1.z.string().optional(),
        favicon: zod_1.z.string().optional(),
        lotoImg: zod_1.z.string().optional(),
        metaImg: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        bgColor: zod_1.z.string().optional(),
        copyright: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
    }),
});
exports.settingValidations = {
    createSettingValidationSchema,
    updateSettingValidationSchema,
};
