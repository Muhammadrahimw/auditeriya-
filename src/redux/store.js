import {configureStore} from "@reduxjs/toolkit";
import {postsApi} from "./api/postApi";

export let store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postsApi.middleware),
});
