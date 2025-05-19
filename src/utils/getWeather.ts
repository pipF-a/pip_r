export type WeatherData = {
  temperature: number;
  description: string;
  city: string;
  main: string;
};

export async function getWeather() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const city = 'Tokyo';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  const res = await fetch(url, { cache: 'no-store' });
  // res.ok チェックを先にしてエラーハンドリング
  if (!res.ok) {
    const errorData = await res.json();  // ここでエラーデータを取得
    throw new Error(`API error: ${JSON.stringify(errorData)}`);
  }

  // 正常時にレスポンスのデータを取得
  const data = await res.json();

  const now = new Date();
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Tokyo',
  });
  const formattedTime = formatter.format(now); 
  console.log(data.weather[0].main)

  return {
    time: `Tokyo / ${formattedTime}`,
    temperature: parseFloat(data.main.temp.toFixed(1)), 
    main: data.weather[0].main,
    description: data.weather[0].description,
    city: data.name,
  };
}
