import { BiLinkExternal } from "react-icons/bi"; 
import noise from '../../images/noise.png'

const ProjectCard = ({project}) => {
   return (
      <div className='from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full text-white'>
         <div className='flex flex-row'>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-via-violet-500 to-transparent'></div>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent'></div>
         </div>
         
         <div className='overflow-hidden px-4 lg:px-8 py-4 lg:py-8'>
            <code className='font-mono text-xs md:text-sm lg:text-base'>
               <img src={noise} alt="Abstract" width={500} height={500} className='absolute top-0 left-0 bg-repeat w-full h-full'/>
               
               <div>
                  <div className='bg-violet-500 text-white rounded-full inline-block px-2'>{project.id}</div>
                  <div className='text-amber-300 mt-3 text-2xl font-semibold'>{project.title}</div> 
               </div> 

               <div>
                  <span className='mr-2'>Skills:</span>
                  <span className='text-orange-400'>
                     {project.skills.map((skill, id) => (
                        <span key={id}>{" " + skill + ""}</span>
                     ))}
                  </span>
               </div>

               <div className='mr-2 mt-4'>
                  <span>{project.description}</span>
               </div>

               <div className='mr-2 mt-5 bg-[#16f2b3] rounded-full inline-block px-3 py-2'>
                  <a href={project.link}>
                     Project view
                  </a>
               </div>
            </code>
         </div>
      </div>
   )
}

export default ProjectCard