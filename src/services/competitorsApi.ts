import { ICompetitor } from './../models/ICompetitor';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const competitorsApi = createApi({
  reducerPath: "competitorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my-json-server.typicode.com/magutierrez/uda_competitors_list/" }),
  endpoints: (builder) => ({
    getCompetitorListByPage: builder.query<ICompetitor[], number>({
      query: (page) => `competitors?_page=${page}&_limit=6`,
    }),
    getCompetitorById: builder.query<ICompetitor, number>({
      query: (id) => `competitors?id=${id}`,
      transformResponse: (response: any) => response[0],
    }),
  }),
});

export const { useGetCompetitorListByPageQuery, useGetCompetitorByIdQuery } = competitorsApi;
