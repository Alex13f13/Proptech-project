import { ICompetitor } from './../models/ICompetitor';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const competitorsApi = createApi({
  reducerPath: "competitorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my-json-server.typicode.com/magutierrez/uda_competitors_list/" }),
  endpoints: (builder) => ({
    getCompetitorByPage: builder.query<ICompetitor[], number>({
      query: (page) => `competitors?_page=${page}&_limit=6`,
    }),
  }),
});

export const { useGetCompetitorByPageQuery } = competitorsApi;
