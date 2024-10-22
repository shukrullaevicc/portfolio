import Marquee from "react-fast-marquee";

import { SkillsData } from "../../utils/skills"; 
import { skillsImage } from "../../utils/skills-image";
import Container from "../container/Container";

import gradient from "../../svg/hero.svg";

const Skills = () => {
   return (
      <div className="relative z-50 border-t my-12 border-[#25213b]">
         <img src={gradient} alt="Hero" className="absolute left-1/2 -translate-x-1/2"/>
         
         <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
               <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"/>
            </div>
         </div>

         <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

         <p className="text-pink-500 text-[0.8rem] my-16 flex justify-center uppercase tracking-widest">[ Skills ]</p>

         <Container>
            <div className="w-full mt-12">
               <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnHover={true}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
               >
                  {
                     SkillsData.map((skill, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all m-3 sm:m-5 rounded-lg group relative cursor-pointer" key={id}>
                           <div className="w-full h-full border border-[#1f223c] bg-[#11152c] rounded-lg shadow-gray-50 group-hover:border-violet-500 duration-500">

                              <div className="flex -translate-y-[1px] justify-center">
                                 <div className="w-3/4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"/>
                                 </div>
                              </div>

                              <div className="flex flex-col items-center justify-center gap-3 p-6">
                                 <div className="h-8 sm:h-10">
                                    <img src={skillsImage(skill)} alt={skill} width={40} height={40} className="h-full w-full rounded-lg"/>
                                 </div>
                                 <p className="text-white text-sm sm:text-lg">{skill}</p>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </Marquee>
            </div>
         </Container>
      </div>   
   )
}

export default Skills