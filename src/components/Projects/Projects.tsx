import { useEffect, useState } from "react";

import bfc from "../../assets/bfc.png";
import qtc from "../../assets/qtc.png";
import hyupp from "../../assets/hyupp.png";
import universal from "../../assets/universal.png";
import justa from "../../assets/justa.png";

import { Project } from "./Project";

export function Projects() {
   const [seeMore, setSeeMore] = useState(false);
   const [corte, setCorte] = useState(0);

   const platform = window.navigator.platform;

   useEffect(() => {
      platform !== "Win32" ? setCorte(4) : setCorte(5);
      console.log(corte);
   }, []);

   const projects = [
      {
         id: 1,
         name: "Biblia Fiel Comentada",
         img: bfc,
      },
      {
         id: 2,
         name: "Quero te conhecer",
         img: qtc,
      },
      {
         id: 3,
         name: "Hyupp",
         img: hyupp,
      },
      {
         id: 4,
         name: "Igreja Universal",
         img: universal,
      },
      {
         id: 5,
         name: "Justa Troca",
         img: justa,
      },
   ];

   return (
      <>
         <div className="flex justify-between items-center px-1 py-4">
            <p className="text-dark dark:text-light">Principais projetos</p>
            {projects.length > 5 && (
               <p
                  className="text-gray text-sm cursor-pointer hover:text-gray/90 hover:font-bold"
                  onClick={() =>
                     seeMore === false ? setSeeMore(true) : setSeeMore(false)
                  }
               >
                  {seeMore === false ? "Ver mais" : "Ver menos"}
               </p>
            )}
         </div>
         <div className="grid md:grid-cols-5 grid-cols-4 gap-2">
            {seeMore &&
               projects.map((project) => (
                  <Project
                     key={project.id}
                     name={project.name}
                     img={project.img}
                  />
               ))}

            {!seeMore &&
               projects
                  .slice(0, corte)
                  .map((project) => (
                     <Project
                        key={project.id}
                        name={project.name}
                        img={project.img}
                     />
                  ))}
         </div>
      </>
   );
}
