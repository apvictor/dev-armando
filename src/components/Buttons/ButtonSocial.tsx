import { IconProps } from "phosphor-react";
import { twMerge } from "tailwind-merge";

interface Props {
  url: string;
  color: string;
  icon: React.FC<IconProps>;
}
export function ButtonSocial({ icon: Icon, url, color }: Props) {
  return (
    <a
      className="rounded-[50%] p-[5px] flex items-center justify-center w-[40px] h-[40px]
        ease-in duration-300
        bg-dark dark:bg-light
        shadow-md hover:shadow-dark dark:hover:shadow-light/70
        hover:scale-[1.1]
        hover:duration-300
        "
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className={twMerge(
          "text-light dark:text-dark duration-300 hover:duration-300 dark:duration-300 dark:hover:duration-300 hover:font-bold",
          color
        )}
        size={30}
      />
    </a>
  );
}
