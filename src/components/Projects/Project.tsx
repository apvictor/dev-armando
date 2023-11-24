import { IProject } from "../Modal/Modal";

interface Props {
  project: IProject;
  modal: boolean;
  setModal: Function;
  setProject: Function;
}
export function Project({ project, modal, setModal, setProject }: Props) {
  function openProject() {
    setModal(!modal);
    setProject(project);
  }

  return (
    <button
      onClick={() => openProject()}
      className="w-[70px] cursor-pointer ease-in duration-300 hover:scale-[1.1]"
    >
      <img
        className="w-[70px] h-[70px] rounded-lg"
        alt={project.name}
        src={project.img}
      />
      <p
        className="py-1 text-center text-xs text-dark ease-in duration-300 dark:text-light"
        title={project.name}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {project.name}
      </p>
    </button>
  );
}
