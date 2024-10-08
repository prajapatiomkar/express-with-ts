"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Use routes
app.use('/api/users', userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server omkar! sample");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
