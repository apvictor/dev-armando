interface Props {
  title: string;
  url: string;
}
export function Button({ title, url }: Props) {
  return (
    <a
      className="h-[50px] w-full rounded-xl
        flex items-center justify-center
        bg-dark dark:bg-light
        font-regular
        shadow-lg hover:shadow-dark dark:hover:shadow-light/30
        hover:scale-[1.01]
        ease-in duration-300
        hover:duration-300
      "
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <p className="text-light dark:text-dark">{title}</p>
    </a>
  );
}
