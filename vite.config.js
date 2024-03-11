"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_tsconfig_paths_1 = __importDefault(require("vite-tsconfig-paths"));
const path_1 = __importDefault(require("path"));
exports.default = (0, vite_1.defineConfig)({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [(0, plugin_react_1.default)(), (0, vite_tsconfig_paths_1.default)()],
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "./src"),
        },
    },
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000,
    },
});
