"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmark = void 0;
const mongoose_1 = require("mongoose");
const bookmarkSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    news_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "News", required: true },
});
exports.Bookmark = (0, mongoose_1.model)("Bookmark", bookmarkSchema);
