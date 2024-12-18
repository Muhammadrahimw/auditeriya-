import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export let postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `/api`,
		prepareHeaders: (headers) => {
			let token = localStorage.getItem(`token`);
			if (token) {
				headers.set(`Authorization`, `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (page) => `?page=${page}`,
		}),
		login: builder.mutation({
			query: (info) => ({
				url: `https://api.escuelajs.co/api/v1/auth/login`,
				method: `POST`,
				body: info,
			}),
		}),
	}),
});

export let {useGetPostsQuery, useLoginMutation} = postsApi;
