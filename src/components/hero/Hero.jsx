import { Link } from "react-router-dom";

import Container from "../container/Container"

// LOTTIE
import AnimationLottie from "../../helper/animation-lottie";
import experience from "../../../public/lottie/contact.json";

// ICONS
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import gradient from "../../svg/hero.svg";

const Hero = () => {
   return (
      <section className='relative'>
         <img src={gradient} alt="" className="absolute left-1/2 -translate-x-1/2"/>
         
         <Container>
            <div className="grid grid-cols-1 itams-center lg:grid-cols-2 gap-7 gap-y-8 px-10">
               <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-5 md:pb-10 lg:pb-10">
                  <h1 className="text-[0.8rem] font-semibold uppercase text-white leading-10 md:font-semibold lg:text-[1rem] lg:font-semibold lg:leading-[3rem]">[ Hello ]</h1>
                  <h3 className="text-4xl font-bold text-[#16f2b3] md:text-5xl md:font-extrabold lg:text-6xl lg:leading-[3.5rem]">Full-stack web developer</h3>
                  <p className="font-montserrat text-white text-[0.8rem] my-5 leading-8">I am a full-stack web developer. I build websites and web applications. I am very passionate and dedicated to my work. I am a quick learner and a team worker that gets the job done. I am very passionate and dedicated to my work. I am a quick learner and a team worker that gets the job done. I am very passionate and dedicated to my work. I am a quick learner and a team worker that gets the job done.</p>
                  <div className="grid grid-cols-2 gap-5">
                     <div className="flex items-center gap-3">
                        <Link className="text-white bg-gradient-to-r to-pink-500 from-violet-500 p-1 rounded-2xl transition-all duration-300 hover:from-pink-500 hover:to-violet-500">
                           <button className="px-3 text-xs md:px-8 py-3 md:py-3 rounded-2xl border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                              <span className="">Contact me</span>
                              <RiContactsFill size={16}/>
                           </button>
                        </Link>
                     </div>
                     <div className="flex items-center gap-3">
                        <Link className="text-white bg-gradient-to-r to-pink-500 from-violet-500 p-1 rounded-2xl transition-all duration-300 hover:from-pink-500 hover:to-violet-500">
                           <button className="px-3 text-xs md:px-8 py-3 md:py-3 rounded-2xl border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                              <span className="">Get resume</span>
                              <MdDownload size={16}/>
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="w-[600px] order-1 lg:order-2 relative rounded-lg lg:rounded-3xl">
                  <AnimationLottie animationPath={experience}/>
               </div>
            </div>
         </Container>
      </section>
   )
}

export default Hero