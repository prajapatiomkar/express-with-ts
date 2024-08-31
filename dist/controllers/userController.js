"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserGreeting = void 0;
const userService_1 = require("../services/userService");
// Controller function
const getUserGreeting = (req, res) => {
    const message = (0, userService_1.getGreetingMessage)();
    res.json({ message });
};
exports.getUserGreeting = getUserGreeting;
