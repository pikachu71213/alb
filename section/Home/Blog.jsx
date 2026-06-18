"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    title: "Value Stream Management",
    description:
      "Value Stream Management (VSM) optimizes the flow of value to customers by mapping, analyzing, and improving workflows.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    title: "Project Management",
    description:
      "Projects are crucial for an organization’s success, especially in competitive industries where rapid execution matters.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    title: "Life Cycle Management",
    description:
      "The project management life cycle outlines high-level processes for successful project delivery and execution.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    title: "Business Intelligence",
    description:
      "Business Intelligence helps organizations transform raw data into meaningful insights and strategic decisions.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    title: "Automation Solutions",
    description:
      "Automation solutions streamline repetitive tasks, improve operational efficiency, and reduce manual effort.",
  },
];

function BlogSlider() {
  return (
    <section className="w-full bg-black pt-0 pb-10 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto relative">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl md:text-[45px] font-bold">
            Our <span className="text-red-500">Blogs</span>
          </h2>
        </div>

        {/* CUSTOM BUTTONS */}
        <button className="blog-prev absolute left-0 top-1/2 -translate-y-2 z-20 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
          <ChevronLeft size={24} />
        </button>

        <button className="blog-next absolute right-0 top-1/2 -translate-y-2 z-20 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
          <ChevronRight size={24} />
        </button>

        {/* SWIPER */}
        <div className="px-1 md:px-14">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>

                <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">

                  {/* IMAGE */}
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={blog.image}
                      alt=""
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <h3 className="text-black text-2xl font-semibold mb-3 line-clamp-1">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>

                    <button className="mt-5 px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                      Read More
                    </button>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}

export default BlogSlider;