import React from 'react';

const Homepage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold text-violet-600'>Wellcome to Todo app checklist.</h1>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn btn-outline btn-primary mt-5">Create Task</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">WellCome to Create todo list.</h3>
                    <form action="" className='flex flex-wrap gap-3'>
                        <label htmlFor="">Enter Your name</label>
                        <input type="text" placeholder="write your todo name" name='name' className="input input-bordered w-full input-primary" />
                        <label htmlFor="">Enter task name</label>
                        <input type="text" placeholder="write your basic concept" className="input input-bordered input-primary w-full " />
                        <label htmlFor="">Wrote description your todo</label>
                        <textarea className="textarea textarea-primary w-full" placeholder="Description"></textarea>
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

export default Homepage;