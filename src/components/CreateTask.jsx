import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateTask = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      desc,
      status,
    };

    setTasks(prev => [...prev, newTask]);
    navigate('/');
  };

  return (
    <>
      <nav className='flex gap-10 justify-center items-center text-2xl font-semibold h-20 bg-green-400 shadow-xl'>
        <Link to="/" className='hover:text-white'>Home</Link> |
        <Link to="/create" className='hover:text-white'>Create New Task</Link>
      </nav>

      <h1 className='text-4xl font-semibold text-center mt-20'>Create Task</h1>

      <section
        className='h-[470px] border w-[700px] ml-[28%] mt-10 p-5 rounded rounded-sm  bg-white '
        style={{ boxShadow: '0 10px 25px rgba(34, 197, 94, 0.5)' }}
      >
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='h-10 w-[80%] ml-16 p-5 mt-5 border border-black rounded-sm'
            type='text'
            placeholder='Enter Title'
            required
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='h-36 w-[80%] ml-16 p-5 mt-5 resize-none border border-black rounded-sm'
            placeholder='Description'
            required
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='h-10 w-[80%] ml-16 px-4 mt-5 border border-black rounded-sm'
            required
          >
            <option value="">-- Select Status --</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="submit"
            className='h-10 w-[80%] ml-16 px-4 mt-10 border border-black bg-green-400 hover:text-white rounded-sm hover:bg-green-500'
          >
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateTask;
