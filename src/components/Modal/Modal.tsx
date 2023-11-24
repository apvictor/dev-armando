import Modal from "react-modal";
import { Toggle } from "../Toggle/Toggle";
import { ArrowLeft, LinkSimpleHorizontal } from "phosphor-react";
import { twMerge } from "tailwind-merge";

interface ITechnology {
  name: string;
  color: string;
}
export interface IProject {
  id: number;
  name: string;
  img: string;
  link: string;
  description: string;
  activities: string;
  technologies: ITechnology[];
}

interface Props {
  modal: boolean;
  setModal: Function;
  project: IProject | null;
}
export function ModalComponent({ modal, setModal, project }: Props) {
  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(!modal)}
      className="w-full h-full min-h-full flex flex-col items-center dark:bg-dark bg-light dark:opacity-100 p-3"
    >
      <main className="max-w-xs md:max-w-md w-full h-full dark:text-light text-dark">
        <header className="flex w-full items-center justify-between">
          <button onClick={() => setModal(!modal)}>
            <ArrowLeft size={24} weight="bold" />
          </button>
          <h3 className="font-bold text-xl">Detalhes do Projeto</h3>
          <Toggle />
        </header>
        <section className="flex flex-col items-center justify-center pt-5">
          <img
            className="w-[70px] h-[70px] rounded-lg"
            alt={project?.name}
            src={project?.img}
          />
          <a href={project?.link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center">
              <h3 className="mt-3 font-bold text-xl">{project?.name}</h3>
              <LinkSimpleHorizontal />
            </div>
          </a>
          <p className="mt-2 text-[#858585] text-xs">{project?.description}</p>
        </section>
        <section className="pt-8">
          <h3 className="font-bold text-xl">Habilidades</h3>
          <div className="mt-2 flex flex-wrap gap-4">
            {project?.technologies.map((technology) => (
              <span
                key={technology.name}
                className={twMerge(
                  "w-fit p-2 px-3 rounded-xl text-light font-bold text-xs",
                  technology.color
                )}
              >
                {technology.name}
              </span>
            ))}
          </div>
        </section>
        <section className="pt-4">
          <h3 className="font-bold text-xl">Atividades</h3>
          <p className="mt-2 text-[#858585] text-xs">{project?.activities}</p>
        </section>
      </main>
    </Modal>
  );
}
