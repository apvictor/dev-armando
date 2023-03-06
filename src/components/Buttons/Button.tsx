interface Props {
   title: string;
   url: string;
}

export function Button({ title, url }: Props) {
   return (
      <a
         className="h-[50px] w-full rounded-xl flex items-center justify-center 
         ease-in duration-300
         bg-dark dark:bg-light
         font-regular hover:font-bold
         shadow-lg hover:shadow-dark dark:hover:shadow-light/30
         hover:scale-[1.05]
      "
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         <p className="text-light dark:text-dark">{title}</p>
      </a>
   );
}
