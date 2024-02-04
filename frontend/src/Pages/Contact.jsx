import React from 'react'


function Contact() {
  return (
    <div
      name="Contact"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div>
          <form action='https://getform.io/f/35c5fd33-aa44-46a7-b247-8531a3fe6425' className='flex flex-col w-full md:w-1/2' method='POST'>
            <input name='name' type='text' placeholder='Enter your name' className='bg-transparent border-2 rounded-lg p-2 my-4 text-white focus:outline-none'/>
            <input name='email' type='email' placeholder='Enter your Email' className='bg-transparent border-2 rounded-lg p-2 my-4 text-white focus:outline-none'/>
            <input name='msg' type='text' placeholder='Enter your Message' className='bg-transparent border-2 rounded-lg p-2 my-4 text-white focus:outline-none'/>
            <button type='submit' className='flex items-center justify-center text-xl text-black mx-auto bg-gradient-to-b from-cyan-300 to-blue-700 px-3 py-2 my-5 hover:scale-110 duration-300 rounded-lg w-1/3'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact