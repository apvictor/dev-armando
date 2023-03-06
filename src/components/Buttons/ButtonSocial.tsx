import { IconProps } from "phosphor-react";

interface Props {
   url: string;
   icon: React.FC<IconProps>;
}

export function ButtonSocial({ icon: Icon, url }: Props) {
   return (
      <a
         className="rounded-[50%] p-[5px] flex items-center justify-center w-[35px] h-[35px]
         ease-in duration-300
         bg-dark dark:bg-light
         shadow-md hover:shadow-dark dark:hover:shadow-light/70
         hover:scale-[1.05]"
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         <Icon className="text-light dark:text-dark" weight="bold" size={29} />
      </a>
   );
}
