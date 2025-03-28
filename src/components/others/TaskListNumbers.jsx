const TaskListNumber=()=>{
    return(
        <div className="flex mt-10 justify-between gap-5 w-screen">
            <div className="rounded-xl py-6 px-9 w[45%] bg-blue-400">
                <h2 className="text-2xl font-semibold">1</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w[45%] bg-green-400">
                <h2 className="text-2xl font-semibold">3</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w[45%] bg-yellow-400">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w[45%] bg-red-400">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
        </div>
    )
}
export default TaskListNumber