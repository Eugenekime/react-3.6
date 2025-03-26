import "../assets/styles/footer.css";
import TaskFilter from "./TasksFilter";

function Footer({ countLeft, clearCompleted, setFilter }) {
  const count = countLeft.filter((task) => task.completed === false).length;
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TaskFilter setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
