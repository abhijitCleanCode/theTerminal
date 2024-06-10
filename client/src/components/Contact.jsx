import React, { useState, useRef } from 'react';

const contactDetails = {
  name: "",
  email: "",
  message: ""
}

const Contact = () => {
  const [form, setForm] = useState(contactDetails);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {}
  const handleChange = (e) => {}

  return (
    <div className='flex justify-center items-center'>
      <div className='flex-[0.75] max-w-2xl card-neumorphism p-8 rounded-[30px] mt-8'>
        <p className='text-[18px] md:text-[14px] text-gray-300 uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black text-[50px] md:text-[60px]'>Connect.</h3>

        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-[#0B1531] py-4 px-6 placeholder:text-gray-300 text-white rounded-[15px] outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#0B1531] py-4 px-6 placeholder:text-gray-300 text-white rounded-[15px] outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's you want to say?"
              className='bg-[#0B1531] py-4 px-6 placeholder:text-gray-300 text-white rounded-[15px] outline-none border-none font-medium'
            />
          </label>

          <button type="submit" className='bg-[#151030] py-3 px-8 rounded-[15px] outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact