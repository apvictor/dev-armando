import { InstagramLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { ButtonSocial } from "../Buttons/ButtonSocial";

export function SocialMedia() {
   return (
      <div className="flex gap-2 p-2">
         <ButtonSocial
            url="https://www.instagram.com/dev.armando"
            icon={InstagramLogo}
         />
         <ButtonSocial
            url="https://www.linkedin.com/in/armando-pereira19/"
            icon={LinkedinLogo}
         />
         <ButtonSocial
            url="https://github.com/Apvictor"
            icon={GithubLogo}
         />
      </div>
   );
}
