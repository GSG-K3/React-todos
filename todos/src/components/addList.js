import React from "react";
import "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function TaskLists(props) {
  const tasks = props.tasks;
  const tasksList = tasks.map((tasks) => {
    return (
      <div className="lists" key={"tasks.key"}>
        <p>
          {tasks.content}
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteTask(tasks.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      {" "}
      <FlipMove duration={500} easing="ease-in-out">
        {tasksList}
      </FlipMove>
    </div>
  );
}
export default TaskLists;
