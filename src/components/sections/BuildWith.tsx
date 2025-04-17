import { SiGithub, SiNextdotjs, SiReact, SiSupabase, SiTailwindcss } from "@icons-pack/react-simple-icons";
import Marquee from "react-fast-marquee";

export const BuildWith = () => {

const icons = [
    {
      icon: <SiSupabase className="w-10 h-10" />,
      label: 'Supabase',
    },
    {
      icon: <SiNextdotjs className="w-10 h-10" />,
      label: 'Next.js',
    },
    {
      icon: <SiReact className="w-10 h-10" />,
      label: 'React',
    },
    {
      icon: <SiTailwindcss className="w-10 h-10" />,
      label: 'Tailwind CSS',
    },
    {
      icon: <SiGithub className="w-10 h-10" />,
      label: 'GitHub',
    },
      {
      icon: <SiSupabase className="w-10 h-10" />,
      label: 'Supabase2',
    },
    {
      icon: <SiNextdotjs className="w-10 h-10" />,
      label: 'Next.js2',
    },
    {
      icon: <SiReact className="w-10 h-10" />,
      label: 'React2',
    },
    {
      icon: <SiTailwindcss className="w-10 h-10" />,
      label: 'Tailwind CSS2',
    },
    {
      icon: <SiGithub className="w-10 h-10" />,
      label: 'GitHub2',
    },
];
    return(
      <>
        <section className="mb-4 shadow-[var(--custom-shadow)] rounded-md col-span-2 p-4 pb-8 h-fit bg-white">
          <div>
            <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">Build with</h2>
            <Marquee        
              gradient
              gradientColor="white"
              gradientWidth={120}
              className="text-muted-foreground"
            >
              <ul className="flex gap-10 ml-8">
                {icons.map((icon)=>(
                  <li key={icon.label}>{icon.icon}</li>
                ))}
              </ul>
            </Marquee>
          </div>
        </section>
      </>
    )
}