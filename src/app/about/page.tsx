import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image src={'/pic.jpg'} alt='sameer' width={600} height={400} className='rounded-lg'></Image>
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">I,m Muhammad Sameer
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">I'm deeply interested in finance, specially in Accounting, Economics, Business Studies along with Aritifical intelligence and block chain technology. Always want to try some unique combination to add value in fintech and make combination of research specially in MS and PHD side alone with computer integration. Because one should be flexible.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://github.com/Sameer98764" target='_blank'>Visit My Github</a></button>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default page
