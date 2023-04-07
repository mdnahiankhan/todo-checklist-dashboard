import React from 'react';
import photo from "../../assets/Coder.jpg"
import { DayPicker } from 'react-day-picker';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const DatePages = ({ selectedDate, setSelectedDate }) => {
    const { register, handleSubmit } = useForm();


    const navigate = useNavigate();
    const date = format(selectedDate, "PP")
    const dataSubmit = data => {
        const allTodos = {
            name: data.name,
            taskname: data.taskname,
            date: data.date,
            description: data.description
        }
        fetch("https://todo-checklist-server.vercel.app/allTodos", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allTodos)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Data is Submitted successfully`)
                navigate('/dashboard')
            })
    }

    return (
        <div>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='coding' />
                    <div className='mr-6'>
                        <DayPicker mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn btn-outline btn-primary mt-5">Add Contact</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">WellCome to Simple Adress Book Manager.</h3>
                    <form onSubmit={handleSubmit(dataSubmit)} action="" className='flex flex-wrap gap-3'>
                        <label htmlFor="">Enter Your name</label>
                        <input type="text" {...register("name")} placeholder="write your name" name='name' required className="input input-bordered w-full input-primary" />
                        <label htmlFor="">Enter Mobile Number</label>
                        <input type="number" {...register("taskname")} placeholder="write your mobile number" required className="input input-bordered w-full input-primary" />
                        <label htmlFor="">Enter date when you Contact.</label>
                        <input type="text" value={date} {...register("date")} placeholder="publish your date" className="input input-bordered input-primary w-full " />
                        <label htmlFor="">Wrote a message for yor Contact</label>
                        <textarea className="textarea textarea-primary w-full" {...register("description")} required placeholder="Description"></textarea>
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
            </div>
        </div>
    );
};

export default DatePages;