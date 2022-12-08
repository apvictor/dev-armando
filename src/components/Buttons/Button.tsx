interface Props {
   title: string;
   url: string;
}

export function Button({ title, url }: Props) {
   return (
      <a
         className="h-[50px] w-full rounded-xl bg-dark dark:bg-light hover:bg-dark/90 dark:hover:bg-light/90 font-light hover:font-bold
      flex items-center justify-center"
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         <p className="text-light dark:text-dark">{title}</p>
      </a>
   );
}
