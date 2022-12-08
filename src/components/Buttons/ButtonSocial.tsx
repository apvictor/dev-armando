import { IconProps } from "phosphor-react";

interface Props {
   url: string;
   icon: React.FC<IconProps>;
}

export function ButtonSocial({ icon: Icon, url }: Props) {
   return (
      <a
         className="rounded-[50%] p-[3px]
         flex items-center justify-center
         w-[35px] h-[35px] bg-dark dark:bg-light
         shadow-md shadow-dark dark:shadow-light/50
         hover:bg-dark/90 dark:hover:bg-light/90
         cursor-pointer"
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         <Icon className="text-light dark:text-dark" weight="bold" size={29} />
      </a>
   );
}
