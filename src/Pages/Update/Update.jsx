import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const storedTodos = useLoaderData();
    const [tasks, setTasks] = useState(storedTodos)
    const navigate = useNavigate();
    const handleUpdate = event => {
        event.preventDefault();
        console.log(tasks);
        fetch(`http://localhost:5000/allTodos/${storedTodos._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)

        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Your ${data} update ${tasks.name} is successfull. `)
                navigate('/dashboard')
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newTasks = { ...tasks }
        newTasks[field] = value;
        setTasks(newTasks)
    }

    return (
        <div className="modal-box relative mx-auto">
            <h1>This is update routes</h1>
            <h3 className="text-lg font-bold mb-2">Update your todo {storedTodos.taskname}.</h3>
            <form onSubmit={handleUpdate} action="" className='flex flex-wrap gap-3'>
                <label htmlFor="">Enter Your name</label>
                <input type="text" placeholder="write your name" name='name' defaultValue={storedTodos.name} disabled className="input input-bordered w-full input-primary" />
                <label htmlFor="">Enter Task name</label>
                <input onChange={handleInputChange} type="text" defaultValue={storedTodos
                    .taskname} name="taskname" placeholder="write your todo name" className="input input-bordered w-full input-primary" />
                <label htmlFor="">Enter date when you finish the task.</label>
                <input type="date" placeholder="publish your date" className="input input-bordered input-primary w-full " disabled defaultValue={storedTodos.date} />
                <label htmlFor="">Wrote description your todo</label>
                <textarea onChange={handleInputChange} className="textarea textarea-primary w-full" placeholder="Description" name='description' defaultValue={storedTodos.description}></textarea>
                <div className='flex justify-between text-center'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 text-center'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;