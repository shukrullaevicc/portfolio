import { Link } from "react-router-dom";

import Container from "../container/Container"

import gradient from "../../svg/hero.svg";
import me from "../../images/me.jpg";
import { BsGithub } from "react-icons/bs";

const AboutMe = () => {
   return (
      <div className="relative z-50 border-t my-12 border-[#25213b]">
         <img src={gradient} alt="Hero" className="absolute left-1/2 -translate-x-1/2"/>

         <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
               <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"/>
            </div>
         </div>

         <p className="text-pink-500 text-[0.8rem] my-16 flex justify-center uppercase tracking-widest">[ About Me ]</p>

         <Container>
            <div className="px-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  <div className="order-2 lg:order-1">
                     <h1 className="font-medium mb-5 text-[#16f2f3] text-3xl mt-5 uppercase">Who I am?</h1>
                     <p className="text-gray-200 text-sm lg:text-lg !leading-10 font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vel? Assumenda soluta nesciunt labore dolorum adipisci. Dolorem quibusdam odio voluptates!</p>
                     <div className="flex items-center gap-5 my-6">
                        <Link className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex items-center justify-center duration-300">
                           <BsGithub size={24}/>
                        </Link>
                        <Link className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex items-center justify-center duration-300">
                           <BsGithub size={24}/>
                        </Link>
                        <Link className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex items-center justify-center duration-300">
                           <BsGithub size={24}/>
                        </Link>
                        <Link className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex items-center justify-center duration-300">
                           <BsGithub size={24}/>
                        </Link>
                     </div>
                  </div>

                  <div className="flex justify-center order lg:order-2">
                     <img className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer" src={me} alt="Me" />
                  </div>
               </div>
               
            </div>
         </Container>
      </div>
   )
}

export default AboutMe