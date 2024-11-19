"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler"));
const cron_1 = __importDefault(require("./app/cron"));
const app = (0, express_1.default)();
//parsers
app.use((0, cors_1.default)());
// Increase the request size limit
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
// application routes
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello from dynamic news-paper ");
});
// global error handler
app.use(globalErrorhandler_1.default);
//Not Found
app.use(notFound_1.default);
// cron job started
cron_1.default.start();
exports.default = app;
