import React from 'react'

import Number from "@/component/Number/Number"
import Footer from "@/component/Footer/Footer"



function page() {
  return (
    <div>
       <section className="relative h-[300px] md:h-[450px] overflow-hidden mt-20">
      {/* Background Image */}
      <img
        src="/images/abtt.png"
        alt="About Us"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <h1 className="text-white text-3xl md:text-[45px] font-semibold ">
          About <span className="text-[#FF403A]">Us</span>
        </h1>
      </div>
    </section>
        {/* <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

      
        <div className="w-full ">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Built to Bring Structure <span className="text-[#FF403A]"> <br /> 
to Complex Work</span>
          </h2>

          <p className="text-[20px] text-[#FFFFFF] mb-6">
            We help organizations manage projects, streamline
processes, and make better decisions through clear
systems and practical execution.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] font-semibold cursor-pointer">
Get Started
          </button>
        </div>

      
        <div className="w-full flex justify-center">
          <img
            src="/images/abt.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>

      </div>
    </section> */}
    {/* <Number /> */}
    <section className="w-full bg-black pt-18 px-4">

  <div className="max-w-6xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* IMAGE */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src="images/abt1.png"
          alt=""
          className="w-full h-[320px] object-cover hover:scale-105 transition-all duration-700"
        />

      </div>

      <div>

        <p className="text-[#FFFFFF] text-[14px] md:text-[20px]">
          Albatroz
          <span className="text-[#FF403A]">solutions</span>
        </p>

        {/* HEADING */}
        <h2 className="text-white py-2 text-3xl md:text-[32px] font-semibold leading-tight">
          Business Outcomes.
          <span className="text-[#FF403A]">
            {" "}Delivered.
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#FFFFFF] text-[14px] md:text-[18px] leading-relaxed  max-w-xl">
Albatroz Solutions is a specialized IT consulting firm dedicated to
helping enterprises unlock the full value of their software investments
— through expert implementation, deep domain knowledge, and a
relentless focus on outcomes.

        </p>

      </div>

    </div>

  </div>

</section>
<section className="w-full bg-black pt-14 md:pt-18 px-4 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-white text-3xl md:text-[45px] leading-[1.2] font-semibold">

          Our Mission &
          <br />

          <span className="text-[#FF403A]">
            Our Approach
          </span>

        </h2>

        {/* UNDERLINE */}
        <div className="w-full h-[2px] bg-[#FF403A] mt-6 relative">


        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        {/* VERTICAL LINE */}
     

        {/* CARD 1 */}
        <div className="relative flex flex-col sm:flex-row items-start gap-8 mb-10">

          {/* ICON */}
          <div className="relative z-10 min-w-[105px] -mr-[85px] ml-0 lg:ml-[20px] -mb-5 md:mb-0 -mt-[2px] h-[105px] rounded-full bg-[#ECECEC] flex  items-center justify-center">

            <img
              src="images/ma.svg"
              alt=""
              className="w-12 h-12 object-contain"
            />

          </div>

          {/* CONTENT */}
          <div className="bg-[#111111] rounded-[18px] p-7 lg:p-15 flex-1">

            <h3 className=" text-[25px] md:text-[32px] font-semibold leading-none text-white">

              Our
              <span className="text-[#FF403A]">
                {" "}Mission
              </span>

            </h3>

            <p className="text-[#D5D5D5] text-[14px] md:text-[20px] leading-[1.8] mt-5 max-w-4xl">

              To Deliver Exceptional Services And Solutions That
              Empower Organizations To Optimize The Value
              Extracted From Their Technology Investments —
              Helping Them Achieve Business Objectives Faster,
              With A Skilled Team And Well-Defined Delivery
              Processes.

            </p>

          </div>

        </div>

        {/* CARD 2 */}
        

      </div>

    </div>
    <div className="relative flex flex-col sm:flex-row items-start gap-8">

          {/* ICON */}
          <div className="relative z-10 min-w-[105px] -mr-[85px] ml-0 lg:ml-[20px] -mb-5 md:mb-0 -mt-[2px] h-[105px] rounded-full bg-[#ECECEC] flex  items-center justify-center">

            <img
              src="images/ma1.svg"
              alt=""
              className="w-12 h-12 object-contain"
            />

          </div>

          {/* CONTENT */}
          <div className="bg-[#111111] rounded-[18px]  p-7 lg:p-15  flex-1">

            <h3 className=" text-[25px] md:text-[32px] font-semibold leading-none text-white">

              Our
              <span className="text-[#FF403A]">
                {" "}Approach
              </span>

            </h3>

            <p className="text-[#D5D5D5] text-[14px] md:text-[20px] leading-[1.8] mt-5">

              We Don’t Implement Software In Isolation. We Work To
              Understand Your Organization’s Objectives, Processes,
              And People — And Build Solutions That Align All Three.

              Every Engagement Begins With A Thorough Discovery
              Of Your Business Context, And Every Recommendation
              Is Grounded In Both Technical Expertise And Real-World
              Delivery Experience.

            </p>

            <p className="text-[#D5D5D5]  text-[14px] md:text-[20px] leading-[1.8] mt-6">

              Whether Its A New Implementation, Enhancement,
              Ongoing Support, Or Strategic Consulting For A Key
              Decision — We Bring The Right Combination Of Product
              Depth And Business Acumen To The Table.

            </p>

          </div>

        </div>

  </div>

</section>
<section className="w-full bg-black py-14 md:py-18 px-4 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-2">

      <h2 className="text-white text-3xl md:text-[45px] font-semibold">

        About
        <span className="text-[#FF403A]">
          {" "}Us
        </span>

      </h2>

      {/* LINE */}
      <div className="w-full h-[1px] bg-[#2A2A2A] mt-6"></div>

    </div>

    {/* TOP DESCRIPTION */}
    <div className="max-w-7xl mx-auto mb-5">

      <p className="text-[#E5E5E5] text-[14px] md:text-[20px]  text-left">

        Established in 2018, Albatroz Solutions is an esteemed
        IT services firm that excels in offering consultation,
        implementation, deployment and support for enterprise
        software within the domains of Project & Portfolio
        Management, Automation, and Business Intelligence.

        Our company stands at the forefront of the industry,
        assisting businesses in fully realizing their potential
        by harnessing the power of technology and optimizing
        their software investments.

      </p>

    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center lg:-mt-[100px]">

      {/* LEFT SIDE */}
      <div className="space-y-5 ">

        <p className="text-[#E5E5E5] text-left text-[14px] md:text-[18px] ">

          At Albatroz Solutions, we recognize that successful
          software implementation extends beyond the realm of
          technology. It entails aligning your organization’s
          objectives, processes, and personnel with the most
          fitting software solution.

          Our team comprises highly proficient professionals
          who blend their vast industry expertise with technical
          acumen to seamlessly guide you throughout your digital
          transformation expedition.

        </p>

        <p className="text-[#E5E5E5] text-left text-[14px] md:text-[20px] ">

          Our specialization lies in delivering top-notch
          services for renowned software platforms including
          Broadcom’s Clarity, Automic Automation, Stonebranch UAC,
          Microsoft Power BI, and Tidal.

          Moreover, we possess extensive experience in the field
          of Project Management, which enables us to offer Project
          Management as a Service (PMaaS) alongside our
          comprehensive range of offerings.

        </p>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative lg:mt-[140px]">

        {/* RED BORDER */}
        <div className="absolute inset-0 border-r-[6px] border-b-[6px] border-[#FF403A] rounded-[30px] translate-x-3 translate-y-3"></div>

        {/* IMAGE */}
        <div className="relative rounded-[30px] overflow-hidden z-10">

          <img
            src="images/imm.png"
            alt=""
            className="w-full  hover:scale-105 transition-all duration-700 "
          />

        </div>

      </div>

    </div>

  </div>

</section>
{/* <section
  className="w-full py-24 px-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600')",
  }}
>


  <div className="absolute inset-0 bg-black/80"></div>

  <div className="max-w-6xl mx-auto relative z-10">

   
    <div className="text-center mb-16">

      <h2 className="text-white text-5xl md:text-6xl font-semibold">

        Why Choose
        <span className="text-[#FF403A]">
          {" "}us?
        </span>

      </h2>

      <p className="text-[#E5E5E5] text-lg leading-relaxed mt-6 max-w-5xl mx-auto">

        If you are looking for functional deployments,
        run and operate support, implementation of new
        modules, or need technical services such as
        integrations, reporting, automations — Albatroz
        Solutions will make it work for you.

      </p>

    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

     
      <div className="border border-[#4B4B4B] rounded-[20px] p-8 bg-black/40 backdrop-blur-sm hover:border-[#FF403A] transition-all duration-500">

        
        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF403A"
            viewBox="0 0 24 24"
            className="w-9 h-9"
          >
            <path d="M12 1l3 5 6 .9-4.5 4.3 1.1 6.3L12 15.8 6.4 17.5l1.1-6.3L3 6.9 9 6z"/>
          </svg>

        </div>

        <h3 className="text-white text-3xl font-semibold mb-5">
          Expertise
        </h3>

        <p className="text-[#D6D6D6] text-lg leading-[1.9]">

          Our team comprises highly skilled professionals
          with extensive experience in implementing
          enterprise software solutions across diverse
          industries.

        </p>

      </div>

   
      <div className="border border-[#4B4B4B] rounded-[20px] p-8 bg-black/40 backdrop-blur-sm hover:border-[#FF403A] transition-all duration-500">

       
        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF403A"
            viewBox="0 0 24 24"
            className="w-9 h-9"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.9V18h-2v1.9A8.1 8.1 0 014.1 13H6v-2H4.1A8.1 8.1 0 0111 4.1V6h2V4.1A8.1 8.1 0 0119.9 11H18v2h1.9A8.1 8.1 0 0113 19.9z"/>
          </svg>

        </div>

        <h3 className="text-white text-3xl font-semibold leading-tight mb-5">

          Customer-Centric
          <br />
          Approach

        </h3>

        <p className="text-[#D6D6D6] text-lg leading-[1.9]">

          We place great emphasis on understanding your
          unique requirements and goals. Our solutions are
          tailor-made to meet your specific needs, ensuring
          maximum return on investment and long-term success.

        </p>

      </div>

  
      <div className="border border-[#4B4B4B] rounded-[20px] p-8 bg-black/40 backdrop-blur-sm hover:border-[#FF403A] transition-all duration-500">

      
        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF403A"
            viewBox="0 0 24 24"
            className="w-9 h-9"
          >
            <path d="M3 13h8V3H3v10zm10 8h8V3h-8v18zM3 21h8v-6H3v6z"/>
          </svg>

        </div>

        <h3 className="text-white text-3xl font-semibold mb-5">
          Ease of Doing Business
        </h3>

        <p className="text-[#D6D6D6] text-lg leading-[1.9]">

          Our team comprises highly skilled professionals
          with extensive experience in implementing
          enterprise software solutions across diverse
          industries.

        </p>

      </div>

      <div className="border border-[#4B4B4B] rounded-[20px] p-8 bg-black/40 backdrop-blur-sm hover:border-[#FF403A] transition-all duration-500">

     
        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF403A"
            viewBox="0 0 24 24"
            className="w-9 h-9"
          >
            <path d="M12 1l3 5 6 .9-4.5 4.3 1.1 6.3L12 15.8 6.4 17.5l1.1-6.3L3 6.9 9 6z"/>
          </svg>

        </div>

        <h3 className="text-white text-3xl font-semibold leading-tight mb-5">

          Commitment to
          <br />
          Excellence

        </h3>

        <p className="text-[#D6D6D6] text-lg leading-[1.9]">

          We place great emphasis on understanding your
          unique requirements and goals. Our solutions are
          tailor-made to meet your specific needs, ensuring
          maximum return on investment and long-term success.

        </p>

      </div>

    </div>

  </div>

</section> */}

    </div>
  )
}

export default page