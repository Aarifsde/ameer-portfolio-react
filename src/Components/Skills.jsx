import React from 'react'
import Figma from '../Assets/figma.png'
import Adobe from '../Assets/xd.png'
import Illu from '../Assets/ai.png'
import Photo from '../Assets/ps.png'
import PP from '../Assets/pr.png'
import Sk from '../Assets/sketch.png'
import Html from '../Assets/html.png'
import Css from '../Assets/css.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 text-[70%] font-medium'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Figma} alt="HTML icon" />
                    <p className='my-4'>Figma</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Adobe} alt="CSS" />
                    <p className='my-4'>Adobe XD</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sk} alt="Javascript" />
                    <p className='my-4'> Adobe Sketch</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Illu}alt="React js" />
                    <p className='my-4'>Illustrator</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Photo} alt="Tailwind CSS" />
                    <p className='my-4'>Photoshop</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PP} alt="Github" />
                    <p className='my-4'>Premiere Pro</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="Github" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="Github" />
                    <p className='my-4'>CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills