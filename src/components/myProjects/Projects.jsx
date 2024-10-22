import { ProjectsData } from "../../utils/projects-data";

import Container from "../container/Container";

import gradient from "../../svg/hero.svg";
import ProjectCard from "../project-card/ProjectCard";

const Projects = () => {
   return (
      <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
         <img src={gradient} alt="Hero" className="absolute left-1/2 -translate-x-1/2"/>
         
         <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
               <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"/>
            </div>
         </div>

         <div className="sticky top-10">
            <p className="text-pink-500 text-[0.8rem] my-16 flex justify-center uppercase tracking-widest">[ My Projects ]</p>
         </div>

         <Container>
            <div className="pt-24">
               <div className="flex flex-col gap-6">
                  {
                     ProjectsData.slice(0, 4).map((project, index) => (
                        <div key={index} id={`sticky-card-${index + 1}`} className="sticky-card w-full mx-auto sticky">
                           <ProjectCard project={project}/>
                        </div>
                     ))
                  }
               </div>
            </div>
         </Container>
      </div>   
   )
}

export default Projects