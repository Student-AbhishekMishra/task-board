import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function Column({ title, tasks, onEdit }) {
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <div ref={setNodeRef} className="column">
      <h3>{title}</h3>
      {tasks
        .filter((task) => task.status === title)
        .map((task) => (
          <TaskCard key={task.id} task={task} onEdit={onEdit} />
        ))}
    </div>
  );
}
