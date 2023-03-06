import { Moon, SunDim } from "phosphor-react";
import { useTheme } from "../../hooks/useTheme";

export function Toggle() {
   const { theme, setTheme } = useTheme();

   return (
      <div className="py-5 flex justify-end">
         <span className="ease-in duration-300 hover:scale-[1.1] cursor-pointer">
            {theme === "light" && (
               <Moon
                  className="text-purple hover:text-purple/90"
                  size={32}
                  weight="bold"
                  onClick={() => setTheme("dark")}
               />
            )}

            {theme === "dark" && (
               <SunDim
                  className="text-yellow hover:text-yellow/90"
                  size={32}
                  weight="bold"
                  onClick={() => setTheme("light")}
               />
            )}
         </span>
      </div>
   );
}
