import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";
import Column from "../components/Column";
import TaskModal from "../components/TaskModal";
import ActivityLog from "../components/ActivityLog";
import { DndContext } from "@dnd-kit/core";

export default function Board() {
  const { tasks, setTasks, addLog } = useContext(TaskContext);
  const { logout } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      )
    );
    addLog("Task moved");
  };

  const resetBoard = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      setTasks([]);
      localStorage.removeItem("tasks");
    }
  };

  const processedTasks = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      priorityFilter === "All" ? true : t.priority === priorityFilter
    )
    .sort((a, b) => {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  return (
    <div className="board">
      <div className="topbar">
        <button onClick={() => setShowModal(true)}>Add Task</button>
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={resetBoard}>Reset</button>
        <button onClick={logout}>Logout</button>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="columns">
          <Column
            title="Todo"
            tasks={processedTasks}
            onEdit={setEditTask}
          />
          <Column
            title="Doing"
            tasks={processedTasks}
            onEdit={setEditTask}
          />
          <Column
            title="Done"
            tasks={processedTasks}
            onEdit={setEditTask}
          />
        </div>
      </DndContext>

      {(showModal || editTask) && (
        <TaskModal
          close={() => {
            setShowModal(false);
            setEditTask(null);
          }}
          existingTask={editTask}
        />
      )}

      <ActivityLog />
    </div>
  );
}
