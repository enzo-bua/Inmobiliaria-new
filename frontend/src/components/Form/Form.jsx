import React from 'react';

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
      <input
        className='border border-gray-300 focus:border-violet-700 outline-none rounded px-4 py-2 text-sm'
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        required
      />
      <input
        className='border border-gray-300 focus:border-violet-700 outline-none rounded px-4 py-2 text-sm'
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        required
      />
      <input
        className='border border-gray-300 focus:border-violet-700 outline-none rounded px-4 py-2 text-sm'
        type='tel'
        name='phone'
        id='phone'
        placeholder='Phone'
        required
      />
      <textarea
        className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded p-4 h-36 text-gray-700'
        name='message'
        id='message'
        placeholder='Message'
        required
      ></textarea>
      <div className='flex justify-end items-end mr-6'>
        <button
          type='submit'
          className='bg-violet-700  text-white px-6 py-2 rounded hover:bg-violet-800 transition-colors'
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
