export const handler = async (event) => {
    try {
        const {
            locale = "us",
            language = "en",
            category,
        } = event.queryStringParameters || {}

        const params = new URLSearchParams({
            locale,
            language,
            apikey: process.env.THE_NEWS_API_KEY,
        });

        if (category) {
            params.set("category", category);
        }

        const url = `https://api.thenewsapi.com/v1/news/headlines?${params.toString()}`;

        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("The News function error:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({error: "Failed to fetch The News"}),
        };
    }
};