import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const filtered = tasks.filter(task => task.id !== id);
      setTasks(filtered);
    }
  };

  return (
    <>
      <nav className='flex gap-10 justify-center items-center text-2xl font-semibold h-20 bg-green-400 shadow-xl'>
        <Link to="/" className='hover:text-white'>Home</Link> |
        <Link to="/create" className='hover:text-white'>Create New Task</Link>
      </nav>

      <h1 className='text-4xl font-semibold text-center mt-16'>All Tasks</h1>

      <div>
        <table
          className='w-[1100px] ml-[15%] mt-10 bg-slate-200 border border-black '
          style={{ boxShadow: '0 10px 25px rgba(34, 197, 94, 0.5)' }}
        >
          <thead>
            <tr>
              <th className='border border-black px-4 py-2'>S.No</th>
              <th className='border border-black px-4 py-2'>Title</th>
              <th className='border border-black px-4 py-2'>Status</th>
              <th className='border border-black px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 bg-slate-100">
                  You have not created any tasks.
                </td>
              </tr>
            ) : (
              tasks.map((task, index) => (
                <tr key={task.id}>
                  <td className='border border-black px-4 py-2'>{index + 1}</td>
                  <td className='border border-black px-4 py-2'>{task.title}</td>
                  <td className='border border-black px-4 py-2'>{task.status}</td>
                  <td className='border border-black px-4 py-2 space-x-4'>
                    <Link to={`/edit/${task.id}`} className="bg-blue-400 w-14 p-2 rounded hover:bg-blue-600">Edit</Link>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="bg-red-400 w-14 p-2 rounded hover:bg-red-600 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
