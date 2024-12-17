import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export let postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({baseUrl: `/api`}),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => `search?q=indila`,
		}),
	}),
});

export let {useGetPostsQuery} = postsApi;
