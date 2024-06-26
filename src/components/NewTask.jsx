import { useState } from "react"

const NewTask = ({onAdd }) => {

    const [enteredTask, setEnteredTask] = useState('');

    const handleChange =(e)=>{
        setEnteredTask(e.target.value);
    }

    const handleClick = ()=>{
        if(enteredTask.trim()===''){
            window.alert('there is no tasks there');
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');
    }
  return (
    <div className="flex items-center gap-4">
      <input className="w-64 py-1 rounded-sm bg-stone-200" 
      type="text"
      onChange={handleChange}
      value={enteredTask}
      />

      <button onClick={handleClick} className="text-stone-700 hover:text-slate-950">
        Add Task
      </button>
    </div>
  )
}

export default NewTask
