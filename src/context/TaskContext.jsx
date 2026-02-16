import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tasks"));
      return stored || [];
    } catch {
      return [];
    }
  });

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addLog = (message) => {
    setLogs((prev) => [
      { message, time: new Date().toLocaleString() },
      ...prev,
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, logs, addLog }}>
      {children}
    </TaskContext.Provider>
  );
};
