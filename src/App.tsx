import { Button } from "./components/Buttons/Button";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

export function App() {
   return (
      <>
         <div className="flex flex-col items-center justify-center dark:bg-dark">
            <div className="max-w-xs md:max-w-md w-full">
               <Header
                  name="Armando Pereira"
                  office="Desenvolvedor Full-Stack"
               />

               <main>
                  <div className="flex flex-col w-full items-center py-4 gap-3">
                     <Button
                        url="https://apvictor.github.io/armando.github.io/"
                        title="Portfólio"
                     />
                     <Button
                        url="https://wa.me/5511995052373?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
                        title="Orçamento"
                     />
                  </div>
               </main>

               <Projects />
            </div>
         </div>
      </>
   );
}
