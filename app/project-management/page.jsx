import React from 'react'

function page() {
  return (
    <div>
      <section className="bg-[#000000] py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

   
        <div className="w-full ">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Project Portfolio  <span className="text-[#FF403A]"><br />  
secure AI into your PMO? </span>
          </h2>

          <p className="text-[20px] text-[#FFFFFF] mb-6">
            From portfolio planning to automation and analytics,
we help organizations manage work with structure,
visibility and control.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] mt-[28px] font-semibold cursor-pointer rounded-lg">
Get my AI readiness report
          </button>
        </div>

      
        <div className="w-full flex justify-center">
          <img
            src="/images/ppm.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full "
          />
        </div>

      </div>
    </section>
    </div>
  )
}

export default page
