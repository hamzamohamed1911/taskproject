import NewProject from "./components/NewProject";
import {useState} from 'react'
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";


function App() {

  const [projectsState,setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  });
  
  const handleAddTask=(text)=>{

    setProjectsState(prevState=>{
      const tasktId = Math.random();

      const newTask ={
       text:text,
       projectId:prevState.selectedProjectId,
       id:tasktId,
      };

        return{
          ...prevState,
          tasks: [newTask,...prevState.tasks]
        }

    })

  }
  const handleDeleteTask=(id)=>{
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task)=> task.id !== id
          )
      };
    });

  }
  const handleSelectProject= (id)=>{
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      };
    });

  }

  const handleStartAddProject=()=>{
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }

  const handleCancelAddProject=()=>{
    
   setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      };
    }); 
  }

  const handlAddProject =(projectData)=>{

    setProjectsState(prevState=>{

      const proectId = Math.random();
      const newProject ={
       ...projectData,
       id:proectId,
      };

        return{
          ...prevState,
          selectedProjectId:undefined,
          projects: [...prevState.projects ,newProject]
        }

    })
  }
  const handleDeleteProject = ()=>{
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      };
    });

  }
 
const selectedProject = projectsState.projects.find(project => project.id ===projectsState.selectedProjectId);

  let content =<SelectedProject tasks={projectsState.tasks} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} onDelete={handleDeleteProject} project={selectedProject}/>;

  if(projectsState.selectedProjectId===null){
    
    content =<NewProject onAdd={handlAddProject} onCancel={handleCancelAddProject} />

  }else if (projectsState.selectedProjectId===undefined)
  {
    content = <NoProjectSelected  onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectSidebar selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
        {content}
    </main>
  );
}

export default App;
