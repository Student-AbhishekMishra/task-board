import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function ActivityLog() {
  const { logs } = useContext(TaskContext);

  return (
    <div className="activity">
      <h3>Activity Log</h3>
      {logs.slice(0, 10).map((log, i) => (
        <p key={i}>
          {log.message} - {log.time}
        </p>
      ))}
    </div>
  );
}
