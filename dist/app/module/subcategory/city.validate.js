"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityValidations = void 0;
const zod_1 = require("zod");
const createCitySchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
    }),
});
const updateCitySchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
    }),
});
exports.cityValidations = {
    createCitySchemaValidation,
    updateCitySchemaValidation,
};
