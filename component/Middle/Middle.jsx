"use client";

import React from "react";
import { useState } from "react";
import { Handshake, Award, Settings, ShieldCheck, ThumbsUp,  ArrowUpRight, } from 'lucide-react';


// import {
//   Target,
//   BadgeCheck,
//   BarChart3,
//   Briefcase,
//   Cog,
//   Users,
//   Database,
//   Handshake,
//    ArrowUpRight,
// } from "lucide-react";

// // import {
// //   Lightbulb,
// //   Expand,
// //   Settings2,
// //   ArrowUpRight,
// // } from "lucide-react";

const features1 = [
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      text: "India's Dedicated Broadcom ValueOps & Automation Partner",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      text: "APAC's Most Certified Broadcom AOD Experts",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      text: "APAC's Leading Stonebranch Reselling & Implementation Partner",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-white" />,
      text: "Class-Leading Delivery Quality with a Decisive Cost Advantage",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      text: "Frictionless Engagement: Transparent, Agile, and Proven",
    },
  ];

const steps = [
  {
    number: "01",
    title: "ADOPT",
    desc: "We help you get started with the right foundation. From setup to training, we ensure a smooth and successful start.",
    color: "border-red-500",
    bgColor: "bg-red-500",
    text: "text-red-500 text-[40px]",
    icon: "images/ww1.svg",
    img: "images/a1.svg",
    img2: "images/aa1.svg",
    list: [
      "Product Installation",
      "Implementation & Initial Rollout",
      "Consulting",
      "Data Migration",
      "Education & Training"
      
    ],
  },
  {
    number: "02",
    title: "EXTEND",
    desc: "We help you scale your workflow with smart integrations and advanced solutions tailored to your business.",
    color: "border-blue-500",
    bgColor: "bg-blue-500",
    text: "text-blue-500 text-[40px]",
    icon: "images/ww2.svg",
    img: "images/a2.svg",
    img2: "images/aa2.svg",

    list: [
      "Rollout to Other Business Units",
      "Product Upgrades",
      "Integrations with 3rd party systems",
      "Reports & BI Dashboards",
      "Custom Configs & Automations",
      "Staff Augmentation Services",
      "AI Agents"
    ],
  },
  {
    number: "03",
    title: "MAINTAIN",
    desc: "We provide continuous support and optimization to ensure long-term performance and reliability.",
    color: "border-green-500",
    bgColor: "bg-green-500",
    text: "text-green-500 text-[40px]",
    icon: "images/ww3.svg",
    img: "images/a3.svg",
    img2: "images/aa3.svg",
    
    list: [
      "L2/L3 Solution Support",
      "Managed Support Services",
      "Proactive System Health Monitoring"
    ],
  },
];

const logos = [
    { src: "/images/brd.svg", alt: 'Broadcom' },
    { src: "/images/stb.svg", alt: 'Stonebranch' },
    { src: "/images/hcl.svg", alt: 'HCLTech' },
    { src: "/images/ibm.svg", alt: 'IBM' },
    { src: "/images/iggt.svg", alt: 'Ignite Technology' },
  ];

const features = [
  {
    icon: "images/sa.svg",
    title: "Strategy Approach",
  },
  {
    icon: "images/ce.svg",
    title: "Certified Experts",
  },
  {
    icon: "images/mi.svg",
    title: "Measurable Impact",
  },
  {
    icon: "images/de.svg",
    title: "Domain Expertise",
  },
  {
    icon: "images/cs.svg",
    title: "Custom Solutions",
  },
   {
    icon: "images/be.svg",
    title: "Businness Experienced",
  },
 
  {
    icon: "images/di.svg",
    title: "Data Intelligence",
  },
   {
    icon: "images/ep.svg",
    title: "Experienced Professionals",
  },
  {
    icon: "images/eep.svg",
    title: "End-to-End Partnership",
  },
  {
    icon: "images/tp.svg",
    title: "Trusted Partnership",
  },
];

function Middle() {

 const [activeStep, setActiveStep] = useState(null);

  const services = [
    {
      icon: "/images/md1.svg",
      title: "Project & Portfolio Management",
      items: [
        "Broadcom Clarity PPM",
        "Broadcom Rally",
        "Broadcom ConnectALL",
        "BI Dashboards (Power BI, Tableau, Qlik)",
      ],
    },
    {
      icon: "/images/md2.svg",
      title: "Enterprise IT Automation",
      items: [
        "Broadcom Automic Automation",
        "Automation Analytics & Intelligence",
        "Stonebranch UAC",
        "Redwood / AppWorx / Control-M Migrations",
      ],
    },
    {
      icon: "/images/md3.svg",
      title: "AI Services for Enterprise",
      items: [
        "LLM Engineering & Prompt Design",
        "Multi-Agent Orchestration",
        "RAG Pipeline Design",
        "MCP Protocol Integration",
        "Full-Stack AI Product Development",
      ],
    },
  ];

    const data = [
    {
      image:"/images/ic1.png",
      title: "Improve Visibility",
      text: "Gain real-time insights across your portfolio and projects.",
    },
    {
      image:"/images/ic2.png",
      title: "Optimize Resources",
      text: "Allocate the right resources to the right projects.",
    },
    {
      image:"/images/ic3.png",
      title: "Increase Efficiency",
      text: "DStreamline processes & deliver projects on time.",
    },
    {
      image:"/images/ic4.png",
      title: "Maximize ROI",
      text: "Make smarter decisions & drive better business outcomes.",
    },
  ];


  return (
    <>
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What <span className="text-red-500">We Do</span>
          </h2>

          <p className="text-gray-300 text-xl md:text-2xl mt-3">
            Smart Solutions,{" "}
            <span className="text-red-500">Measurable Results</span>
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border border-gray-700 bg-black rounded-sm p-8 hover:border-red-500 transition duration-300"
            >
              {/* TOP BORDER */}
              <div className="absolute top-0 left-0 w-full h-[10px] bg-red-500"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-white mx-auto mb-8">
                <img src={service.icon} alt="" />
              </div>

              {/* TITLE */}
              <h3 className="text-white text-2xl font-bold text-center leading-snug">
                {service.title}
              </h3>

              {/* UNDERLINE */}
              <div className="w-16 h-[2px] bg-red-500 mx-auto my-6"></div>

              {/* LIST */}
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <img src="/images/mdc.svg" alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
    {/* new Updated */}
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
  <div className="mx-auto text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-[45px] font-semibold tracking-tight mb-12">
      Partnership Built <span className="text-[#FF3B30]">On Trust</span>
    </h2>

    {/* Infinite Slider */}
    <div className="relative">
      <div className="flex w-max items-center gap-10 md:gap-16 lg:gap-20 animate-slide">

        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="
              h-auto w-auto object-contain
              brightness-0 invert opacity-80
              hover:opacity-100 transition-opacity duration-200
              w-24 md:w-auto
            "
          />
        ))}

        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="
              h-auto w-auto object-contain
              brightness-0 invert opacity-80
              w-24 md:w-auto
            "
          />
        ))}

      </div>
    </div>

  </div>
</section>
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Image & Callout Column (5 Columns wide on large screens) */}
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="relative w-full rounded-lg overflow-hidden mb-6 group">
            {/* Replace with your actual image path */}
            <img 
              src="/images/asd.png" 
              alt="People looking at neon question mark" 
              className="w-full h-[350px] object-cover rounded-lg brightness-90 contrast-125"
            />
            {/* Simulated Neon Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>

          <p className="text-[16px] md:text-[20px] uppercase tracking-[0.2em] text-gray-400 mb-2">
            Questions Are Normal
          </p>
          <h3 className="text-xl md:text-[30px] font-semibold tracking-wide uppercase mb-1">
            Delivering Solutions
          </h3>
          <h3 className="text-xl md:text-[30px] font-semibold tracking-wide uppercase text-[#ff3b30] mb-6">
            Is Our Superpower
          </h3>

          {/* Pill Button */}
        <button
  className="inline-flex items-center gap-2 px-5 py-4 rounded-full border border-[#ff3b30] bg-transparent text-[20px] cursor-pointer hover:bg-[#ff3b30]/10 transition"
>
  <span className="text-[#ff3b30]">★</span>
  <span className="font-medium whitespace-nowrap">
    Smart Solutions. <span className="text-[#ff3b30]">Real Impact</span>
  </span>
</button>
        </div>

        {/* Right Side: Content & Features Container (7 Columns wide on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Header */}
          <h2 className="text-2xl md:text-[45px] font-semibold tracking-tight tracking-tight mb-2">
            Why Albatroz <span className="text-[#ff3b30]">Solutions</span> ?
          </h2>
          <p className="text-sm md:text-base font-medium text-gray-300 mb-8">
            Purpose-driven solutions. <span className="text-[#ff3b30]">Built around you.</span>
          </p>

          {/* Features Outer Box with Red Tinted Border */}
          <div className="border border-[#ff3b30] rounded-2xl bg-gradient-to-b from-neutral-900/30 to-transparent overflow-hidden">
            {features1.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-5 md:p-6 transition-colors duration-300 hover:bg-neutral-900/50 ${
                  index !== features1.length - 1 ? 'border-b border-[#ff3b30]' : 'border-[#ff3b30]'
                }`}
              >
                {/* Icon Wrapper Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#ff3b30] bg-black flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                  {feature.icon}
                </div>

                {/* Vertical Divider Graphic inside list row */}
                <div className="h-8 w-[1px] bg-[#FF3B30] mx-1 hidden sm:block"></div>

                {/* Text Content */}
                <p className="text-sm md:text-[20px] font-semibold tracking-wide text-[#FFFFFF] leading-snug">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
     {/* <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <div className="text-center mb-12">
          <h2 className="text-[45px] font-bold text-[#FFFFFF] ">
            Benefits of <span className="text-[#FF403A]"> Implementing Clarity </span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              
            >
              <div className=" overflow-hidden rounded-xl transition duration-300">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transition duration-500"
                />
              </div>

              
            </div>
            <div className="pt-5 text-left">
                <h3 className="text-[20px]  font-semibold text-[#FF403A]">
                  {item.title}
                </h3>
                <p className="text-[#FFFFFF] text-[16px] mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

       
        <div className="w-full lg:w-[75%]">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
           Discover how <span className="text-[#FF403A]"> 
 <br /> Rally by Broadcom </span>
          </h2>
          <p className="text-[20px] text-[#FFFFFF] mb-6">
            Rally by Broadcom is designed to improve your delivery
system, increase teamwork, and enhance the visibility of
your work. With tools that help you plan, prioritize, and
track tasks effectively, Rally keeps your business objectives,
the focus of everything.
          </p>
        </div>
       
        <div className="w-full flex justify-center">
          <img
            src="images/dh.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>
      </div>
    </section>
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
         
          <div className=" flex flex-col justify-center text-center">
            <div className="">
              
             
             
              <img
                src="images/as.png"
                alt="hand"
                className=" w-[520px]"
              />
            </div>
            <h5 className="text-[20px] font-regular text-[#FFFFFF]">QUESTIONS ARE NORMAL</h5>
            <h4 className="text-[30px] text-[#FFFFFF] font-semibold mt-2">DELIVERING SOLUTIONS</h4>
            <h5 className="text-[30px] text-[#FF403A] font-semibold">IS OUR SUPERPOWER</h5>
            <div className="flex justify-center">
           <button className="mt-5 px-6 py-3 rounded-full border border-red-500 text-white hover:bg-red-600 transition rounded-full p-4 cursor-pointer">
                ✦ Smart Solutions. <span className="text-red-600"> Real Impact </span>
              </button>
            </div>

          </div>

       
          <div>
           
            <h2 className="text-[45px] font-semibold text-white mb-3">
              Why Albatroz{" "}
              <span className="text-red-500">Solutions</span>
            </h2>

            <p className="text-gray-400 mb-8">
              Purpose-driven solutions. Built around you.
            </p>

            <div className="border border-red-500 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-5 py-5 border-b border-r border-red-500/50 last:border-b-0"
                  >
                    
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white shrink-0">
                      <img src={item.icon} alt="" />
                    </div>

                  
                    <h3 className="text-white text-sm font-medium">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="mt-8">
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                Delivering Solutions
              </p>

              <h3 className="text-3xl font-bold text-white mt-2">
                IS OUR{" "}
                <span className="text-red-500">SUPERPOWER</span>
              </h3>

              
            </div>
          </div>

        </div>
      </div>
    </section> */}
   <section className="w-full bg-black py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">

    {/* HEADING */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-[45px] font-semibold text-white">
        How We <span className="text-red-500">Work</span>
      </h2>
    </div>


    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* LEFT SIDE */}
      <div className="space-y-5">

        {steps.map((item, index) => (
          <div
            key={index}
            className={`
              relative
              border ${item.color}
              rounded-2xl
              p-6
              bg-[#050505]
              hover:bg-[#0b0b0b]
              transition duration-300
            `}
          >

            <div className="flex items-start justify-between gap-5">


              {/* LEFT CONTENT */}
              <div className="flex gap-4">


                {/* ICON */}
                <div
                  className={`
                    w-12 h-12 mt-1
                    rounded-full
                    border ${item.color}
                    flex items-center justify-center
                    shrink-0
                  `}
                >
                  <img src={item.icon} alt="" />
                </div>



                {/* TEXT */}
                <div>

                  <h3 className="text-white text-3xl md:text-[40px] font-semibold flex items-center gap-2">
                    <span className={item.text}>
                      {item.number}
                    </span>

                    {item.title}
                  </h3>


                  <p className="text-white text-[18px] leading-relaxed max-w-md">
                    {item.desc}
                  </p>


                </div>

              </div>



              {/* IMAGE ICON WITH HOVER */}
              <div className="relative">


                {/* ONLY THIS AREA HAS GROUP */}
               <div
  className="group cursor-pointer relative"
  onClick={() =>
    setActiveStep(activeStep === index ? null : index)
  }
>

<img
  src={item.img}
  alt=""
/>


                  {/* HOVER BOX */}
                <div
className={`
absolute
left-10
top-0
${item.bgColor}
text-white

w-80
max-w-[calc(100vw-2rem)]

rounded-xl
z-50

opacity-0
invisible

group-hover:opacity-100
group-hover:visible

max-sm:left-[-136px]
max-sm:-translate-x-1/2
max-sm:top-12

max-sm:transition-all
duration-300

${activeStep === index 
? "max-sm:opacity-100 max-sm:visible" 
: ""}
`}
>
  <h4 className="text-lg text-center py-2 -pb-2 font-semibold  max-sm:text-base">
    {item.title}
  </h4>

  <ul className="space-y-0 text-sm bg-[#1B1B1B] rounded-b-xl py-2">
    {item.list.map((point, i) => (
      <li
        key={i}
        className="
          flex
          items-center
          gap-2
          px-3
          py-1
          text-[18px]
          font-medium

          max-sm:text-sm
          max-sm:px-2
        "
      >
        <img
          src={item.img2}
          alt=""
          className="w-5 h-5 flex-shrink-0 max-sm:w-4 max-sm:h-4"
        />
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>

                </div>


              </div>


            </div>

          </div>
        ))}

      </div>



      {/* RIGHT SIDE */}
      <div className="relative flex justify-center items-center">

        <div className="
          absolute
          w-72
          h-72
          bg-red-500/20
          blur-3xl
          rounded-full
        "></div>


        <img
          src="images/hww.png"
          alt=""
          className="relative z-10"
        />

      </div>


    </div>

  </div>
</section>
    </>
  );
}

export default Middle;