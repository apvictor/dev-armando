import { InstagramLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { ButtonSocial } from "../Buttons/ButtonSocial";

export function SocialMedia() {
  return (
    <div className="flex gap-2 p-2">
      <ButtonSocial
        url="https://www.instagram.com/dev.armando"
        icon={InstagramLogo}
        color="hover:text-[#E1306C] dark:hover:text-[#E1306C]"
      />
      <ButtonSocial
        url="https://www.linkedin.com/in/armando-pereira19"
        icon={LinkedinLogo}
        color="hover:text-[#0E76A8] dark:hover:text-[#0E76A8]"
      />
      <ButtonSocial
        url="https://github.com/apvictor"
        icon={GithubLogo}
        color="dark:hover:text-[#171515]"
      />
    </div>
  );
}
