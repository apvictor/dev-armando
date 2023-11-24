import Modal from "react-modal";

import { Header } from "./components/Header/Header";
import { Button } from "./components/Buttons/Button";
import { Projects } from "./components/Projects/Projects";
import { useState } from "react";
import { IProject, ModalComponent } from "./components/Modal/Modal";

Modal.setAppElement("#root");

export function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [project, setProject] = useState<IProject | null>(null);

  return (
    <div className="ease-in duration-300 min-h-full flex flex-col items-center dark:bg-dark p-3">
      <div className="max-w-xs md:max-w-md w-full h-full">
        <Header name="Armando Pereira" office="Desenvolvedor Full-Stack" />

        <main>
          <div className="flex flex-col w-full items-center py-4 gap-3">
            <Button
              url="https://apvictor.github.io/armando.github.io/"
              title="Portfólio"
            />
            <Button
              url="https://wa.me/5511995052373?text=Olá,%20encontrei%20seu%20Portífolio."
              title="Contato"
            />
          </div>
        </main>

        <Projects modal={modal} setModal={setModal} setProject={setProject} />
      </div>
      <ModalComponent project={project} modal={modal} setModal={setModal} />
    </div>
  );
}
