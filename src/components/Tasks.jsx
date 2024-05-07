import NewTask from "./NewTask"
const Tasks = ({tasks, onAdd , onDelete}) => {
  return <section>
    <h2 className="text-2xl font-bold text-ston mb-4">
        Tasks
    </h2>
    <NewTask onAdd={onAdd}  onDelete={onDelete}/>
    {tasks.length === 0 && (<p className="text-stone-800 my-4">
        this  project does not have any tasks yet.
    </p>)}
    {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
      
      {tasks.map((task)=> (<li className="flex justify-between my-4" key={task.id}><span>
      {task.text}
      </span>
        <button onClick={()=>{onDelete(task.id)}} className="text-stone-700 hover:text-red-500">
          clear
        </button>
      </li> ))}

      </ul>}
    
  </section>
}

export default Tasks
