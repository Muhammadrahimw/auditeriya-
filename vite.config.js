import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
	base: "/",
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		proxy: {
			"/api": {
				target:
					process.env.VITE_API_URL ||
					"https://api.themoviedb.org/3/movie/popular",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
