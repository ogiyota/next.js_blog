import { createClient } from "microcms-js-sdk";

export const client = createClient({
    erviceDomain : process.env.SERVIS_DOMAIN,
    apiKey : process.env.API_KEY,
});

