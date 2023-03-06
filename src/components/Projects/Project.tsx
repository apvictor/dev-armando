interface Props {
   name: string;
   img: any;
}

export function Project({ name, img }: Props) {
   return (
      <div className="w-[70px] cursor-pointer ease-in duration-300 hover:scale-[1.1]">
         <img className="w-[70px] h-[70px] rounded-lg" alt={name} src={img} />
         <p
            className="py-1 text-center text-xs text-dark ease-in duration-300 dark:text-light"
            title={name}
            style={{
               overflow: "hidden",
               whiteSpace: "nowrap",
               textOverflow: "ellipsis",
            }}
         >
            {name}
         </p>
      </div>
   );
}
