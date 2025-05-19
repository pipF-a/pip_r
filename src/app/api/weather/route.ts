import { getWeather } from '@/utils/getWeather';

export async function GET() {
  try {
    const weather = await getWeather();
    return Response.json(weather);
  } catch (error) {
    console.error("API route error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
