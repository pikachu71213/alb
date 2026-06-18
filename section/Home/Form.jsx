import React, { useState } from 'react';
import { PhoneCall, User, Phone, Mail, ChevronDown } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    company: '',
    email: '',
    message: '',
    agreed: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="bg-black text-white py-10 px-6 md:px-12 lg:px-24 flex items-center justify-center font-sans overflow-hidden">
      <div className="relative max-w-6xl w-full py-16 px-6 md:px-14">
        
       
        <div className="absolute top-0 left-0 w-32 h-[2px] bg-white pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[2px] h-40 bg-gradient-to-b from-white via-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-44 h-[2px] bg-white pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-32 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
         
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-[45px] font-semibold tracking-tight mb-6">
              Let's <span className="text-[#ff3b30]">Talk</span>
            </h2>
            <p className="text-[#FFFFFF] text-sm md:text-base leading-relaxed tracking-wide max-w-md mb-10">
              If you're looking to bring structure to your projects or improve how your teams operate, we'd be glad to understand your requirements and share how we can help.
            </p>
            
            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#book-call" 
                className="inline-flex items-center gap-3 bg-white text-[#ff3b30] font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-neutral-100 shadow-md text-sm md:text-base"
              >
                <PhoneCall className="w-5 h-5 fill-[#ff3b30]" />
                Book A Call
              </a>
              
              <a 
                href="https://wa.me/your-number" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent text-white font-bold px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-400 hover:bg-neutral-900/30 transition-all duration-200 text-sm md:text-base"
              >
                {/* Accurate WhatsApp Icon SVG */}
                <svg 
                  className="w-5 h-5 text-white fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.176.001 6.163 1.24 8.404 3.484 2.24 2.244 3.475 5.231 3.471 8.411-.004 6.597-5.342 11.945-11.893 11.945-2.01-.001-3.986-.511-5.731-1.483L0 24zm6.59-4.846c1.657.983 3.283 1.517 4.928 1.519 5.433 0 9.85-4.414 9.853-9.847.002-2.632-1.023-5.105-2.887-6.973C16.677 1.986 14.205.961 11.579.961c-5.438 0-9.854 4.416-9.857 9.85-.001 1.741.454 3.435 1.32 4.933l-.994 3.633 3.719-.973zm12.115-7.004c-.316-.158-1.87-.923-2.158-1.028-.288-.105-.499-.158-.709.158-.21.316-.81.105-.993.316-.183.21-.367.237-.683.079-.316-.158-1.334-.492-2.542-1.57-1.011-.902-1.694-2.017-1.892-2.333-.198-.316-.021-.487.137-.644.143-.141.316-.368.474-.553.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.553-.079-.158-.709-1.71-.972-2.342-.257-.616-.517-.533-.709-.543-.184-.01-.395-.012-.605-.012s-.553.079-.842.395c-.289.316-1.105 1.08-1.105 2.632 0 1.553 1.132 3.053 1.29 3.264.158.21 2.228 3.402 5.398 4.766.754.325 1.344.519 1.803.665.757.241 1.446.207 1.99.127.608-.089 1.87-.764 2.133-1.464.264-.699.264-1.29.184-1.411-.079-.122-.289-.198-.605-.355z" />
                </svg>
                On Chats
              </a>
            </div>
          </div>

          {/* Right Column: Let's Connect Form */}
          <div className="lg:col-span-7 w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Let's <span className="text-[#ff3b30]">Connect</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter Your Name*" 
                    className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter Your Mobile No.*" 
                    className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
              </div>

              {/* Row 2: Company & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    className="w-full bg-black text-gray-400 px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm appearance-none cursor-pointer"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  >
                    <option value="" disabled hidden>Company Name</option>
                    <option value="enterprise" className="bg-neutral-900 text-white">Enterprise</option>
                    <option value="startup" className="bg-neutral-900 text-white">Startup/SMB</option>
                    <option value="other" className="bg-neutral-900 text-white">Other</option>
                  </select>
                  <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Id*" 
                    className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <textarea 
                  rows="3" 
                  placeholder="Message..." 
                  className="w-full bg-black text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Row 4: Checkbox Agreement */}
              <div className="flex items-start gap-3 pt-1">
                <input
  type="checkbox"
  id="terms"
  required
  className="mt-1 w-4 h-4 rounded bg-black border-gray-700 accent-[#ff3b30] cursor-pointer"
  checked={formData.agreed}
  onChange={(e) =>
    setFormData({ ...formData, agreed: e.target.checked })
  }
/>
                <label htmlFor="terms" className="text-xs text-gray-400 select-none leading-normal">
                  I agree to the Terms of Service and{' '}
                  <a href="#privacy" className="text-gray-300 underline hover:text-[#ff3b30]">
                    Privacy Policy
                  </a>.
                </label>
              </div>

              {/* Submit Button Row */}
              <div className="pt-2 flex justify-center md:justify-start">
                <button 
                  type="submit"
                  className="w-full md:w-auto min-w-[200px] bg-white text-[#ff3b30] font-bold px-8 py-3 rounded-md transition-all duration-200 hover:bg-neutral-100 shadow-md text-center text-sm md:text-base tracking-wide"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}