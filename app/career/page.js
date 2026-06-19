import React from 'react'
import Nav from "@/component/Nav/Nav"
import Number from "@/component/Number/Number"
import Footer from "@/component/Footer/Footer"
import TestimonialSlider from '../../component/Testimonials/Testimonials'



function page() {
  return (
    <div>
<Nav />
        <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side */}
        <div className="w-full ">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Built to Bring Structure <span className="text-[#FF403A]"> <br /> 
to Complex Work</span>
          </h2>

          <p className="text-[20px] text-[#FFFFFF] mb-6">
            We help organizatio ns manage projects, streamline
processes, and make better decisions through clear
systems and practical execution.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] font-semibold cursor-pointer">
Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full flex justify-center">
          <img
            src="/images/abt.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>

      </div>
    </section>
    <Number />
    <section className="w-full py-4 bg-black">
  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2 className="text-[45px] font-semibold text-white">
      Join Our <span className='text-[#FF403A]'> Team! </span>
    </h2>

    <p className="mt-6 text-[20px] leading-8 text-[#FFFFFF]">
     Come join our vibrant professional services team if you have a niche for consulting & enjoy working closely with
customers in solving their business problems.
    </p>

    {/* PARAGRAPH 2 */}
    <p className="mt-4 text-[20px] leading-8 text-[#FFFFFF]">
      Albatroz's truly flexible work culture, challenging opportunities to learn & grow in a startup environment is what
we are known for. If this resonates with you, hit us with your resume for the openings listed.
    </p>

  </div>
</section>
<section className="w-full py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4">

    <div className="border border-gray-700 rounded-[30px] p-8 md:p-12 flex flex-col gap-8">

      <h2 className="text-[38px] md:text-[45px] font-semibold text-white ">
        Current Vacancies
      </h2>

       <button className="w-fit px-8 py-3 rounded-full border border-[#FFFFFF] text-[#FFFFFF] text-[18px] font-medium cursor-pointer">
        Position
      </button>

      <div className="flex flex-col gap-5">

        <div className="flex items-start gap-4">
          <span className="w-[30px] h-[30px] rounded-full border border-[#FF403A] text-white flex items-center justify-center font-semibold">
            1
          </span>

          <p className="text-[#FFFFFF] text-[20px] leading-8">
            Clarity PPM Consultant
          </p>
        </div>
      </div>
      <button className="w-fit px-8 py-3 rounded-full bg-[#FF403A] text-white text-[18px] font-medium hover:scale-105 duration-300 cursor-pointer">
        VIEW JOB/APPLY
      </button>
    </div>
  </div>
</section>
<TestimonialSlider />
<Footer />
    </div>
  )
}

export default page