import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  //gravação local
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      // CHAMA A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" },
      );
      const data = await response.json();

      // PEGAR OS DADOS QUE ELA RETORNA
      console.log(data);
      // ARMAZENAR/PERSISTIR EESSES DADOS NO STATE
      setTasks(data);
    };
    //A baixo chama a Api caso queira fazer a simulação dela acima
    //fetchTasks();
  }, []);

  //funçao criada para o click
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }
  //função para deletar
  function onTaskClick2(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  //função para adicionar
  function onaddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      iscompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onaddTaskSubmit={onaddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskClick2={onTaskClick2}
        />
      </div>
    </div>
  );
}

export default App;
