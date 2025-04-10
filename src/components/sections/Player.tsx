'use client'
import dynamic from 'next/dynamic';

interface PlayerProps {
  videoUrl: string;
  isLoop?: boolean;
  isAutoPlay?: boolean;
  isControls?: boolean;
  className:string;
}
const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false } // サーバーサイドレンダリングをスキップ
);

export const Player = ({
  videoUrl,
  isLoop,
  isAutoPlay,
  isControls,
}: PlayerProps) => {
  
    return(
      <>
        <section className='shadow-[var(--custom-shadow)] rounded-md p-4 h-fit bg-white'>
          {/* <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">bgm for work</h2> */}
            <div className="overflow-hidden rounded bg-muted aspect-video">
              <ReactPlayer 
                url={videoUrl}
                width={"100%"}
                height={"100%"}
                playing={isLoop} 
                loop={isAutoPlay} 
                controls={isControls} 
              />
            </div>
        </section>
      </>
    )
}