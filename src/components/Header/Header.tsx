import profile from "../../assets/profile.jpg";

import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Toggle } from "../Toggle/Toggle";

interface Props {
   name: string;
   office: string;
}

export function Header({ name, office }: Props) {
   return (
      <header>
         <Toggle />

         <div className="flex flex-col items-center gap-2">
            <img
               src={profile}
               alt="Foto de Perfil"
               className="rounded-[50%] w-[125px] h-[125px]"
            />

            <p className="font-bold text-dark text-lg dark:text-light">
               {name}
            </p>
            <p className="text-gray text-sm">{office}</p>

            <SocialMedia />
         </div>
      </header>
   );
}
