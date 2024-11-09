import React from 'react'
import FAQ from './FAQ'

const HowToEnroll = () => {
  return (
    <div className='pt-16' id='FAQ'>
       <div className="flex items-center justify-center flex-col gap-2 ">
        <img
          src={import.meta.env.BASE_URL+"/Images/icons/important.png"}
          width={80}
          height={80}
          alt=""
          loading="lazy"
        />
        <div className="text-center">
        
          <h1 className="text-3xl font-semibold">
           Must Read Before Enrolling  (FAQ)
          </h1>
        </div>
      </div>

      {/*  policy */}
      <div className='px-6 md:px-16'>
      <FAQ/>
      </div>
    </div>
  )
}

export default HowToEnroll
