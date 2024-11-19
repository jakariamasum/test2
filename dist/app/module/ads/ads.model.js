"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ads = void 0;
const mongoose_1 = require("mongoose");
const AdsSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    position: {
        type: String,
        enum: ["header", "category", "details"],
        required: true,
    },
    type: { type: String, enum: ["code", "images"], required: true },
    content: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        validate: [
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                validator: function (value) {
                    if (this.type === "code") {
                        return typeof value === "string";
                    }
                    else if (this.type === "images") {
                        return (typeof value === "object" &&
                            typeof value.image === "string" &&
                            typeof value.link === "string");
                    }
                    return false;
                },
                message: "Invalid content format",
            },
        ],
    },
});
exports.Ads = (0, mongoose_1.model)("Ads", AdsSchema);
