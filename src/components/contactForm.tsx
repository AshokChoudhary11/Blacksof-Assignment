import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-[#0067B1] text-white px-10 py-20 md:px-20 lg:px-52 flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0">
      <div className=" space-y-4">
        <h2 className="text-4xl font-bold">Get in touch</h2>
        <hr className="w-12 border-white" />
        <p className="text-lg">For general enquiries</p>
        <div>
          <p className="font-bold">Address :</p>
          <p>110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
        <div>
          <p className="font-bold">Phone :</p>
          <p>+91 22 25208822</p>
        </div>
        <div>
          <p className="font-bold">Email :</p>
          <p>info@supremegroup.co.in</p>
        </div>
      </div>

      <form className="space-y-4 mt-8 md:mt-0 w-full max-w-md">
        <input type="text" placeholder="Full name" className="w-full bg-transparent border-b border-white py-2 text-white outline-none" />
        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white py-2 text-white outline-none" />
        <input type="text" placeholder="Company" className="w-full bg-transparent border-b border-white py-2 text-white outline-none" />
        <textarea placeholder="Message" className="w-full bg-transparent border-b border-white py-2 text-white outline-none resize-none" rows={3}></textarea>
        <button className="mt-4 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-700 transition">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
