import { useEffect, useState } from "react";

import { projects } from "../../api";
import { Project } from "./Project";

interface Props {
  modal: boolean;
  setModal: Function;
  setProject: Function;
}
export function Projects({ modal, setModal, setProject }: Props) {
  const [seeMore, setSeeMore] = useState(false);
  const [corte, setCorte] = useState(0);

  const platform = window.navigator.platform;

  useEffect(() => {
    platform !== "Win32" ? setCorte(4) : setCorte(5);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-1 py-4">
        <p className="ease-in duration-300 text-dark dark:text-light">
          Principais projetos
        </p>
        {projects.length > corte && (
          <p
            className="ease-in duration-300 text-gray text-sm cursor-pointer hover:text-gray/90"
            onClick={() => (!seeMore ? setSeeMore(true) : setSeeMore(false))}
          >
            {!seeMore ? "Ver mais" : "Ver menos"}
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-5 grid-cols-4 gap-2">
        {seeMore &&
          projects.map((project: any) => (
            <Project
              key={project.id}
              project={project}
              modal={modal}
              setModal={setModal}
              setProject={setProject}
            />
          ))}

        {!seeMore &&
          projects
            .slice(0, corte)
            .map((project: any) => (
              <Project
                key={project.id}
                project={project}
                modal={modal}
                setModal={setModal}
                setProject={setProject}
              />
            ))}
      </div>
    </>
  );
}
