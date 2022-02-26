import { Fragment } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {

  const tasks = useSelector(state => state.todo);

  return (
    <Fragment>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </Fragment>
  );
};

export default TasksList;
