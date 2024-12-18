import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		proxy: {
			"/api": {
				target: "https://api.themoviedb.org/3/movie/popular",
				changeOrigin: true,
				rewrite: (path) => {
					return (
						path.replace(/^\/api/, "") +
						"&api_key=490c442891195bd132fe581623b11454"
					);
				},
			},
		},
	},
	define: {
		"process.env": {
			VITE_API_URL: process.env.VITE_API_URL,
			VITE_API_KEY: process.env.VITE_API_KEY,
		},
	},
});
