import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'


const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My ProtFolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Recent Projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to My Web Development Protfolio! Explore a collection of Projects Showcasting my expertise in Front End Development</p>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
                {workData.map(({ bgImage, title, description, link }, index) => (
                    <div key={index} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                        <div className='bg-white w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            {/* Content Section */}
                            <div className="">
                                <h2 className="font-semibold">{title}</h2>
                                <p className="text-sm text-gray-700">{description}</p>
                            </div>

                            {/* Send Icon */}
                            <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center 
shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-300">
                                <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a href='' className='w-max flex items-center gap-2 mx-auto my-20 px-10 py-3 border border-gray-700 text-gray-700 rounded-full hover:bg-lightHover transition duration-500'>Show More <Image src={assets.right_arrow_bold} alt='' className='w-4' /></a>

        </div>
    )
}

export default Work
