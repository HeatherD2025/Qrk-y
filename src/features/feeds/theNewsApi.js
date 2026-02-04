import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testValue = 123;

export const theNewsApi = createApi({
  reducerPath: "theNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/.netlify/functions",
  }),
  endpoints: (builder) => ({
    getTheNewsArticles: builder.query({
      query: ({ country = "us", language = "en", categories } = {}) => {
        const params = new URLSearchParams({
          country,
          language,
        });

        if (categories?.length) {
          params.set("category", categories.join(","));
        }

        return `theNews?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetTheNewsArticlesQuery } = theNewsApi;
