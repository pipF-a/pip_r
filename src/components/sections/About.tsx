import Image from 'next/image'

export const About = () => {
    return(
      <>
        <section className='mb-4 shadow-[var(--custom-shadow)] rounded-md p-4 col-span-2 bg-white'>
          <div>
            <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">About me</h2>
            <p className="bg-custom-blue">当サイトは、キャッチアップとアウトプットを目的としたサイトであるため誰かに向けたサイトではありません。</p>
            <div className='flex items-center gap-x-4 mt-8'>
              <Image
                src="/administrator.png"
                className='rounded-full border-1 shadow-[var(--custom-shadow)]'
                height={45}
                width={45}
                alt="管理者のアイコン"
              />
              <div>
                <h3 className="text-[18px] font-[300]">pip_r</h3>
                <p className='mt-1'>フロントエンドエンジニアとして仕事をしています。</p>
              </div>
            </div>
    
          </div>
        </section>
      </>
    )
}
