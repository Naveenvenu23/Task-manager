import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskToEdit = tasks.find(t => t.id === Number(id));

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDesc(taskToEdit.desc);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  if (!taskToEdit) {
    return (
      <>
        <h2 className="text-center mt-20 text-red-600">Task not found!</h2>
        <Link to="/" className="block text-center mt-5 text-blue-600 hover:underline">Go back to Home</Link>
      </>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = { ...taskToEdit, title, desc, status };
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedTasks);
    navigate('/');
  };

  return (
    <>
      <nav className='flex gap-10 justify-center items-center text-2xl font-semibold h-20 bg-green-400 shadow-xl'>
        <Link to="/" className='hover:text-white'>Home</Link> |
        <Link to="/create" className='hover:text-white'>Create New Task</Link>
      </nav>

      <h1 className='text-3xl text-center mt-20'>Edit Task</h1>

      <section
        className='h-[500px] border w-[700px] ml-[28%] mt-14 p-5 rounded'
        style={{ boxShadow: '0 10px 25px rgba(34, 197, 94, 0.5)' }}
      >
        <form onSubmit={handleUpdate}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='h-10 w-[80%] ml-10 p-5 mt-5 border border-black'
            type='text'
            placeholder='Enter Title'
            required
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='h-36 w-[80%] ml-10 p-5 mt-5 resize-none border border-black'
            placeholder='Description'
            required
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='h-10 w-[80%] ml-10 px-4 mt-5 border border-black'
            required
          >
            <option value="">-- Select Status --</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="submit"
            className='h-10 w-[80%] ml-10 px-4 mt-10 border border-black bg-green-400 hover:text-white'
          >
            UPDATE
          </button>
        </form>
      </section>
    </>
  );
};

export default EditTask;
