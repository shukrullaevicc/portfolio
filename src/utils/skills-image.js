import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/js.png";
import bootstrap from "../images/bootstrap.png";
import gitHub from "../images/github.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import antd from "../svg/ant-design.svg";
import figma from "../images/figma.png";
import typescript from "../images/typescript.png";
import nextJS from "../images/nextjs.png";

export const skillsImage = (skill) => {
   const skillID = skill.toLowerCase();
   switch (skillID) {
      case "html":
         return html;
      case "css":
         return css;
      case "javascript":
         return javascript;
      case "next js":
         return nextJS;
      case "react":
         return react;
      case "typescript":
         return typescript;
      case "bootstrap":
         return bootstrap;
      case "figma":
         return figma;
      case "github":
         return gitHub;
      case "sass":
         return sass;
      case "antd":
         return antd;
      default:
         break;
   }
};
