'use client';

import { useEffect, useState } from 'react';

type WeatherData = {
  temperature: number;
  description: string;
  city: string;
  main: string;
  time: string;
};

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [time, setTime] = useState<string>(
  new Date().toLocaleString('ja-JP', { 
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch('/api/weather');
        if (!res.ok) throw new Error('Failed to fetch weather');
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error('天気API取得エラー:', err); 
        setError('天気情報の取得に失敗しました');
      }
    }

    fetchWeather();
    const interval = setInterval(fetchWeather, 30000);
    return () => clearInterval(interval);
  }, []);

  // 時刻を毎秒更新
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString('ja-JP', { 
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function renderWeatherIcon(main: string) {
    switch (main) {
        case 'Clouds':
        case 'Partly cloudy':
        case 'Overcast':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M255.62-200q-73.39 0-124.5-51.5Q80-303 80-376.38q0-68.77 48.46-121.24 48.46-52.46 118.54-54.46 10.77-89.3 77.46-148.5 66.69-59.19 156.77-59.19 97.39 0 165.15 69.96 67.77 69.96 67.77 168.58v51.69h24.62q58.92-2.77 100.08 36.12Q880-394.54 880-335.15q0 55.92-39.62 95.53Q800.77-200 744.85-200H255.62Zm0-30.77h489.23q43.46 0 73.92-30.46t30.46-73.92q0-42.7-30.46-73.16-30.46-30.46-73.92-30.46h-61.47v-82.46q0-86.39-59.46-147.08Q564.46-729 478.77-729q-84.92 0-144.89 60.69-59.96 60.69-59.96 147.08h-19.77q-59.69 0-101.53 42.35-41.85 42.34-41.85 103.26 0 59.93 42.46 102.39t102.39 42.46ZM480-480Z"/></svg>
        );
      case 'Clear':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M464.62-747.69v-130.77h30.76v130.77h-30.76Zm215.23 89.84-21.23-21.23L750-773.77l22.77 23-92.92 92.92Zm67.84 193.23v-30.76h130.77v30.76H747.69ZM464.62-81.54v-130h30.76v130h-30.76ZM281.46-658.85l-95-91.15L210-772l92.92 92.15-21.46 21ZM751-186.46l-92.38-94.46 21-20.23 92.61 90.92L751-186.46ZM81.54-464.62v-30.76h130.77v30.76H81.54Zm127.92 278.16L188-210l91.15-91.15 11.23 10.7 12 11.07-92.92 92.92ZM480.18-280q-83.26 0-141.72-58.28Q280-396.56 280-479.82q0-83.26 58.28-141.72Q396.56-680 479.82-680q83.26 0 141.72 58.28Q680-563.44 680-480.18q0 83.26-58.28 141.72Q563.44-280 480.18-280Zm-.3-30.77q70.5 0 119.93-49.3 49.42-49.3 49.42-119.81 0-70.5-49.3-119.93-49.3-49.42-119.81-49.42-70.5 0-119.93 49.3-49.42 49.3-49.42 119.81 0 70.5 49.3 119.93 49.3 49.42 119.81 49.42ZM480-480Z"/></svg>
        );
      case 'Rain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M552.62-95.31q-5.62 3.46-11.97 1.39-6.34-2.08-9.03-8.46l-72.08-143.39q-2.69-5.61-.73-11.96 1.96-6.35 7.57-9.04 5.62-2.69 11.97-.23 6.34 2.46 9.8 8.08l72.08 142.61q2.69 5.62.35 11.96-2.35 6.35-7.96 9.04Zm240.76-.23q-5.61 2.69-11.96.62-6.34-2.08-9.04-7.7L700.31-246q-2.69-5.62-.73-11.96 1.96-6.35 7.57-9.04 5.62-3.46 11.97-1 6.34 2.46 9.8 8.08L801-116.54q2.69 5.62.35 11.96-2.35 6.35-7.97 9.04Zm-480.76 0q-5.62 2.69-12.35 1.12-6.73-1.58-9.42-7.96l-72.08-143.39q-2.69-5.61-.23-11.96 2.46-6.35 8.08-9.04 5.61-2.69 11.96-.73 6.34 1.96 9.04 7.58l72.07 143.61q2.69 5.62.62 11.85-2.08 6.23-7.69 8.92Zm-17.24-253.69q-80.84 0-138.11-57.27Q100-463.77 100-544.62q0-75.92 52.65-132.15 52.66-56.23 133.58-63 29.69-56 79.89-88.11Q416.31-860 480-860q86.38 0 145.96 57.12 59.58 57.11 69.73 142.11 79 3.23 121.66 49.27Q860-565.46 860-504.62q0 64.62-45.27 110-45.27 45.39-110.11 45.39H295.38Zm0-30.77h409.24q51.38 0 88-36.73 36.61-36.73 36.61-87.89 0-51.38-36.61-88-36.62-36.61-88-36.61h-40v-15.39q0-76.38-54.12-130.5-54.12-54.11-130.5-54.11-55.62 0-101.58 30.19T310.15-718l-3.38 8.77h-13.39q-67.38 2-115 49.73-47.61 47.73-47.61 114.88 0 68.16 48.23 116.39Q227.23-380 295.38-380ZM480-604.62Z"/></svg>
        );
      case 'Snow':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M259.83-221.54q-11.45 0-19.87-8.59-8.42-8.6-8.42-20.04 0-11.45 8.59-19.87 8.6-8.42 20.04-8.42 11.45 0 19.87 8.59 8.42 8.6 8.42 20.04 0 11.45-8.59 19.87-8.6 8.42-20.04 8.42Zm120 124.62q-11.45 0-19.87-8.6-8.42-8.6-8.42-20.04t8.59-19.86q8.6-8.43 20.04-8.43 11.45 0 19.87 8.6 8.42 8.6 8.42 20.04t-8.59 19.86q-8.6 8.43-20.04 8.43Zm120-124.62q-11.45 0-19.87-8.59-8.42-8.6-8.42-20.04 0-11.45 8.59-19.87 8.6-8.42 20.04-8.42 11.45 0 19.87 8.59 8.42 8.6 8.42 20.04 0 11.45-8.59 19.87-8.6 8.42-20.04 8.42Zm240 0q-11.45 0-19.87-8.59-8.42-8.6-8.42-20.04 0-11.45 8.59-19.87 8.6-8.42 20.04-8.42 11.45 0 19.87 8.59 8.42 8.6 8.42 20.04 0 11.45-8.59 19.87-8.6 8.42-20.04 8.42Zm-120 124.62q-11.45 0-19.87-8.6-8.42-8.6-8.42-20.04t8.59-19.86q8.6-8.43 20.04-8.43 11.45 0 19.87 8.6 8.42 8.6 8.42 20.04t-8.59 19.86q-8.6 8.43-20.04 8.43ZM295.38-389.23q-80.71 0-138.04-57.29Q100-503.81 100-584.45q0-76.09 52.65-132.32 52.66-56.23 133.58-63 29.76-56.05 79.92-88.14T479.8-900q86.58 0 146.16 57.12 59.58 57.11 69.73 142.11 79 3.23 121.66 49.27Q860-605.46 860-544.45q0 64.45-45.32 109.83-45.32 45.39-110.06 45.39H295.38Zm0-30.77h409.24q51.63 0 88.12-36.73t36.49-88q0-51.27-36.49-87.89-36.49-36.61-88.12-36.61h-40v-15.39q0-76.17-54.26-130.39-54.26-54.22-130.27-54.22-55.77 0-101.61 30.06-45.84 30.07-68.33 81.17l-3.49 8.77h-13.41q-67.05 2.28-114.77 49.87-47.71 47.59-47.71 114.57 0 68.15 48.21 116.47Q227.19-420 295.38-420ZM480-544.62Z"/></svg>
        );
      case 'Thunderstorm':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f"><path d="M336.15-86.15 366-172.31h-63.69l42.31-118.46h69.23l-36.08 84.62h69.92l-93.07 120h-18.47ZM564.62-120l24.15-69.23h-66.46l36.07-101.54h69.24l-28.85 67.69h68.92L583.08-120h-18.46ZM295.38-349.23q-80.71 0-138.04-57.29Q100-463.81 100-544.45q0-76.09 52.65-132.32 52.66-56.23 133.58-63 29.69-56 79.89-88.11Q416.31-860 480.1-860q86.28 0 145.86 57.12 59.58 57.11 69.73 142.11 79 3.23 121.66 49.27Q860-565.46 860-504.68q0 64.68-45.38 110.06-45.39 45.39-110 45.39H295.38Zm0-30.77h409.24q51.63 0 88.12-36.73t36.49-88q0-51.27-36.49-87.89-36.49-36.61-88.12-36.61h-40v-15.39q0-76.38-54.12-130.5-54.12-54.11-130.29-54.11-55.89 0-101.82 30.19-45.93 30.19-68.24 81.04l-3.38 8.77h-13.52q-67.25 2-114.87 49.57-47.61 47.57-47.61 114.87 0 68.33 48.12 116.56Q227.01-380 295.38-380ZM480-604.62Z"/></svg>
        );
    }
  }

  if (error) return <div>{error}</div>;
  if (!weather) return <div>読み込み中...</div>;

  return (
    <div className='fixed right-0 bottom-4 h-fit pr-8'>
      <p className='text-2xl font-thin tracking-[1px]'>{weather.city} / {time}</p>
      <p className='flex gap-3 text-4xl font-thin items-center'>{renderWeatherIcon(weather.main)}{weather.temperature} ℃</p>
    </div>
  );
}
