interface Props {
   name: string;
   img: any;
}

export function Project({ name, img }: Props) {
   return (
      <div className="w-[70px] cursor-pointer hover:font-bold">
         <img
            className="w-[70px] h-[70px] rounded-lg"
            alt="Foto Projeto"
            src={img}
         />
         <p
            className="py-1 text-center text-xs text-dark dark:text-light"
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
