import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const localBackend = createApi({
    reducerPath: 'localBackend',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        credentials: "same-origin",
        mode: 'cors',

    }),
    endpoints: (builder) => ({
        urlEndpoint: builder.query<string, string>({
            query: (url) => `/api/${url}`,
        })
    }),
})


export default localBackend
