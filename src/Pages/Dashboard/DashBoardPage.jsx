import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";



const DashBoardPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks", user],
        queryFn: () =>
            axiosPublic.get(`/tasks?email=${user?.email}`).then((res) => res.data),
    });

    const onSubmit = (data) => {
        const task = {
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            descriptions: data.descriptions,
            status: "to-do",
            email: user?.email,
        };
        axiosPublic.post("/tasks", task).then(() => {
            refetch();
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task added",
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    const to_do = tasks.filter((task) => task.status === 'to-do')
    const ongoing = tasks.filter((task) => task.status === 'ongoing')
    const completed = tasks.filter((task) => task.status === 'completed')

    const Drag = (e, id) => {
        e.dataTransfer.setData("todoID", id);
    };

    const DraggingOver = (e) => {
        e.preventDefault()
    }

    const DragToDo = (e, status) => {
        let SharedTaskId = e.dataTransfer.getData('todoID')
        axiosPublic.put(`/tasks/${SharedTaskId}`, { status: status })
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }

    const DragOngoing = (e, status) => {
        let SharedTaskId = e.dataTransfer.getData('todoID')
        axiosPublic.put(`/tasks/${SharedTaskId}`, { status: status })
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }
    const DragComplete = (e, status) => {
        let SharedTaskId = e.dataTransfer.getData('todoID')
        axiosPublic.put(`/tasks/${SharedTaskId}`, { status: status })
            .then(res => {
                console.log(res.data);
                refetch()
            })
    }

    const handleDelete = id => {
        axiosPublic.delete(`/tasks/${id}`)
            .then(() => {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task Deleted",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (


        <div className="w-full px-8">
            <div className="bg-base-100 text-center items-center font-bold text-4xl mb-10">
                Track Your Work {user.displayName}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-3">
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium">
                            Title
                        </label>
                        <br />
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Title"
                            className="border-2 px-1 py-1 w-full"
                        />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="deadline" className="font-medium">
                            Deadline
                        </label>
                        <br />
                        <input
                            {...register("deadline", { required: true })}
                            type="date"
                            className="border-2 px-1 py-1 w-full"
                        />
                        {errors.deadline && <span>This field is required</span>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="priority" className="font-medium">
                            Difficulty
                        </label>
                        <br />
                        <select
                            {...register("priority", { required: true })}
                            name=""
                            id=""
                            className="border-2 px-1 py-1 w-full"
                        >
                            <option value="low">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="descriptions" className="font-medium">
                        Descriptions
                    </label>
                    <br />
                    <textarea
                        {...register("descriptions", { required: true })}
                        className="border-2 px-1 py-1 w-full"
                        name="descriptions"
                        id=""
                        rows="2"
                    ></textarea>
                    {errors.descriptions && <span>This field is required</span>}
                </div>
                <input
                    type="submit"
                    value="Add"
                    className="bg-cyan-900  btn text-white font-normal cursor-pointer"
                />
            </form>

            {/* dnd section  */}
            <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 my-14">

                {/* todo  */}

                <div onDragOver={(e) => DraggingOver(e)} onDrop={(e) => DragToDo(e, 'to-do')} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">TO-DO</h2>
                        {
                            to_do?.map((task) => (
                                <div key={task?._id}
                                    draggable
                                    onDragStart={(e) => Drag(e, task._id)}
                                    className="bg-red-400 mb-2 rounded-md p-2"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h1 className="text-xl font-medium">{task?.title}</h1>
                                        <div>
                                            <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><AiOutlineDelete></AiOutlineDelete></button>
                                            <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><FaRegEdit></FaRegEdit></button>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-4">{task?.descriptions}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>



                {/* ongoing  */}

                <div onDragOver={(e) => DraggingOver(e)} onDrop={(e) => DragOngoing(e, 'ongoing')} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Ongoing</h2>
                        {
                            ongoing?.map((task) => (
                                <div key={task?._id}
                                    draggable
                                    onDragStart={(e) => Drag(e, task._id)}
                                    className="bg-yellow-300 mb-2 rounded-md p-2"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h1 className="text-xl font-medium">{task?.title}</h1>
                                        <div>
                                            <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><AiOutlineDelete></AiOutlineDelete></button>
                                            <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><FaRegEdit></FaRegEdit></button>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-4">{task?.descriptions}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* done  */}

                <div onDragOver={(e) => DraggingOver(e)} onDrop={(e) => DragComplete(e, 'completed')} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Completed</h2>
                        {
                        completed?.map((task) => (
                            <div key={task?._id}
                                draggable
                                onDragStart={(e) => Drag(e, task._id)}
                                className="bg-green-500 mb-2 rounded-md p-2"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h1 className="text-xl font-medium">{task?.title}</h1>
                                    <div>
                                        <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><AiOutlineDelete></AiOutlineDelete></button>
                                        <button onClick={() => handleDelete(task?._id)} className="text-2xl text-red-700 btn btn-ghost"><FaRegEdit></FaRegEdit></button>
                                    </div>
                                </div>
                                <p className="text-sm leading-4">{task?.descriptions}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;