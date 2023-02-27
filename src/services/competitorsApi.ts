import { ICompetitorResponseData } from '../models/IResponseData';
import totalPagesCount from "../utils/totalPagesCount";
import { ICompetitor } from './../models/ICompetitor';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const competitorsApi = createApi({
  reducerPath: "competitorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my-json-server.typicode.com/magutierrez/uda_competitors_list/" }),
  endpoints: (builder) => ({
    getCompetitorList: builder.query<ICompetitorResponseData, number>({
      query: () => `competitors?_page=1&_limit=6`,
      transformResponse(competitorList: ICompetitor[], meta) {
        return { 
          competitorList, 
          totalPages: totalPagesCount(Number(meta?.response?.headers.get("X-Total-Count"))) ,
          link: meta?.response?.headers.get("Link")
        };
      },
    }),
    getCompetitorById: builder.query<ICompetitor, number>({
      query: (id: number) => `competitors?id=${id}`,
      transformResponse: (response: any) => response[0],
    }),
  }),
});

export const { useGetCompetitorListQuery, useGetCompetitorByIdQuery } = competitorsApi;
