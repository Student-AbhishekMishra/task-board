import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuid } from "uuid";

export default function TaskModal({ close, existingTask }) {
  const { setTasks, addLog } = useContext(TaskContext);

  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(existingTask?.description || "");
  const [priority, setPriority] = useState(existingTask?.priority || "Low");
  const [dueDate, setDueDate] = useState(existingTask?.dueDate || "");
  const [tags, setTags] = useState(existingTask?.tags?.join(",") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");

    if (existingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === existingTask.id
            ? {
                ...t,
                title,
                description,
                priority,
                dueDate,
                tags: tags.split(","),
              }
            : t
        )
      );
      addLog("Task edited");
    } else {
      const newTask = {
        id: uuid(),
        title,
        description,
        priority,
        dueDate,
        tags: tags.split(","),
        createdAt: new Date().toISOString(),
        status: "Todo",
      };
      setTasks((prev) => [...prev, newTask]);
      addLog("Task created");
    }

    close();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h3>{existingTask ? "Edit Task" : "Add Task"}</h3>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
}
