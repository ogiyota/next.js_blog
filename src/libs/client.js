import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain : process.env.SERVIS_DOMAIN,
    apiKey : process.env.API_KEY,
});

