import "../assets/styles/taskList.css";
import Task from "./Task";

function TaskList({ tasks, setTasks, error, deleteTask, filteredTasks }) {
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  if (error)
    return (
      <p
        style={{
          fontSize: "24px",
          fontFamily: "inherit",
          fontWeight: "inherits",
          lineHeight: "1.4em",
          color: "gray",
          textAlign: "center",
        }}
      >
        {error}
      </p>
    );

  return (
    <ul className="todo-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <Task
            text={task.title}
            key={task.id}
            id={task.id}
            onDelete={deleteTask}
            onToggle={toggleCompletion}
            completed={task.completed}
          />
        ))
      ) : (
        <p
          style={{
            fontSize: "24px",
            fontFamily: "inherit",
            fontWeight: "inherits",
            lineHeight: "1.4em",
            color: "gray",
            textAlign: "center",
          }}
        >
          No tasks
        </p>
      )}
    </ul>
  );
}

export default TaskList;
