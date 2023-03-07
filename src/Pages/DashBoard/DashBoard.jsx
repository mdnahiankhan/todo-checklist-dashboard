import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import DeleteModal from '../DeleteModal/DeleteModal';
import Loading from '../Loading/Loading';
import ShowTodos from '../ShowTodos/ShowTodos';

const DashBoard = () => {
    const [deletingTodos, setDeletingTodos] = useState(null)
    const { data: allTodos, isLoading, refetch } = useQuery({
        queryKey: ['productsName'],
        queryFn: async () => {
            const res = await fetch('https://todo-checklist-server.vercel.app/allTodos')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handledelete = data => {
        fetch(`https://todo-checklist-server.vercel.app/allTodos/${data._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('Deleted Successfully.')
            })
    }

    const closeModal = () => {
        setDeletingTodos(null)
    }



    return (
        <div className='p-2'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 p-4'>
                {
                    allTodos
                        ?.map(alltodo => <ShowTodos
                            key={alltodo._id}
                            alltodo={alltodo}
                            refetch={refetch}
                            setDeletingTodos={setDeletingTodos}
                        ></ShowTodos>)
                }
            </div>

            {
                deletingTodos && <DeleteModal
                    title={`Are you want to delete this ${deletingTodos.name}`}
                    message={`If you delete it. It can not retrived anymore`}
                    handledelete={handledelete}
                    modaldata={deletingTodos}
                    closeModal={closeModal}
                    successbuttonName='delete'
                ></DeleteModal>
            }
        </div>
    );
};

export default DashBoard;