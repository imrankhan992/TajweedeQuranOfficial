import React from 'react'
import reason from './ReasonToChoseUs'

const ReasonPeopleChoseUs = () => {
  return (
    <div className='px-6 md:px-16 relative pb-16' data-aos="fade-up">
      
        <h1 className='text-3xl md:text-4xl font-bold pb-6'>{reason.length} Reasons For People Choosing Us</h1>
      <div className='flex flex-wrap gap-2 items-center justify-center'>
      {reason.map((reason)=>{
        return(
          <div className='flex flex-col !rounded-2xl text-white items-center justify-center text-center p-4 w-full md:w-52 min-h-64 max-h-64 bg-[#014B5E] gap-2'>
            <img loading="lazy" src={reason.icon} alt="" className='h-20 w-20'/>
            <h1 className='text-xl  font-semibold'>{reason.title}</h1>
            <p>{reason.description}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ReasonPeopleChoseUs
