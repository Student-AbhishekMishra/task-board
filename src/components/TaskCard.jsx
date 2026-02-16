import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task, onEdit }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const { setTasks, addLog } = useContext(TaskContext);

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const deleteTask = () => {
    if (window.confirm("Delete task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
      addLog("Task deleted");
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="task-card"
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate || "N/A"}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}
