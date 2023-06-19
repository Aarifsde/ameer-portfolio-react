import React from 'react'
import WorkImg from '../Assets/Projects/eccora.jfif'
import WorkImg2 from '../Assets/Projects/oddict.jfif'
import WorkImg3 from '../Assets/Projects/avati.jfif'
import WorkImg4 from '../Assets/Projects/crid.jfif'
import WorkImg5 from '../Assets/Projects/apple.jfif'
import WorkImg6 from '../Assets/Projects/needed.jfif'

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] text-[70%] font-medium'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
                <p className='py-6'>Check out my recent work</p>
            </div>
         {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
                {/* grid items */}
                <div style={{backgroundImage:`url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Eccora UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/153628707/EKORA" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                        
                       </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImg2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Oddict UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/153391231/Oddict-Design-and-Visual-Identity" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                        
                       </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Avati UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/153942631/AVATI" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                        
                       </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Crid UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/153358769/Crid-App" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                        
                       </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg5})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Apple Store UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/153074565/Apple-Store" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                       
                       </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg6})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Dojo UI
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://www.behance.net/gallery/154318405/DOJO" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Behance</button>
                        </a>
                        
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work