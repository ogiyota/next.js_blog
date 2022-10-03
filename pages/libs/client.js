import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain : "next-react-blog",
    apiKey : process.env.API_KEY,
});

