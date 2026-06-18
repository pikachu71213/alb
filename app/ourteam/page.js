


import React from 'react'
import Nav from "@/component/Nav/Nav"
import Number from "@/component/Number/Number"
import Footer from "@/component/Footer/Footer"

 const leaders = [
    {
      id: 1,
      name: "Build Modern Digital Experiences",
      role: "Creative Solutions For Your Business",
      description:
        "A PPM and Clarity SME with vast experience over 22 years helping customers with best practice solutions in implementing Clarity. Responsible for Strategy, Sales & Marketing & Operations. Financial Markets enthusiast, musicophile & a Tennis buff.",
      image: "images/lt1.png",
    },
    {
      id: 2,
      name: "Innovative Technology Leadership",
      role: "Delivering Smart Business Solutions",
      description:
        "Experienced leader focused on driving digital transformation and helping organizations scale with innovative technologies and customer-focused strategies.",
      image: "images/lt2.png",
    },
    {
      id: 3,
      name: "Gayathri Gupta Shatavelli",
      role: "Practice Lead – PPM",
      description:
        "A highly motivated Clarity guru backed by versatile skillset & 12 years of bimplementing & customizing Clarity for global customers. Leads the PPM Practice & Albatroz and a great mentor for budding consultants. Certified SAFe Agilist & Clarity PPM Professional. Traveller, foodie and loves music.",
      image: "images/lt3.png",
    },
    {
      id: 4,
      name: "Venugopal Reddy Ettireddy",
      role: "Practice Lead – Automation",
      description:
        "Over 24 years of experience in IT services business with a technology mindset. Being a Subject Matter Expert on Automation & Devops, is responsible for leading the Automation practice & mentors the budding consultants.",
      image: "images/lt4.png",
    },
  ];

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
                 We help organizations manage projects, streamline
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
     <section className="w-full py-10 bg-black">
      
      <div className="max-w-7xl mx-auto px-4">      
        <h2 className="text-[45px] text-center text-white font-semibold mb-16">
          Our Leadership Team
        </h2>
        <div className="flex flex-col gap-20">

          {leaders.map((leader, index) => (

            <div
              key={leader.id}
              className={`grid grid-cols-1 ${
                index % 2 === 0
                  ? "lg:grid-cols-[0.7fr_1.3fr]"
                  : "lg:grid-cols-[1.3fr_0.7fr]"
              } gap-12 items-center`}
            >

              {/* IMAGE LEFT */}
              {index % 2 === 0 && (
                <div className="w-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full rounded-3xl"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                
                <h2 className="text-[30px] font-semibold text-white leading-tight">
                  {leader.name}
                </h2>

                <h4 className="mt-4 text-[20px] font-semibold text-[#FF403A]">
                  {leader.role}
                </h4>

                <p className="mt-4 text-white text-[18px] leading-8">
                  {leader.description}
                </p>

              </div>

              {/* IMAGE RIGHT */}
              {index % 2 !== 0 && (
                <div className="w-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full rounded-3xl"
                  />
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>    
    <Footer />
    </div>
  )
}

export default page