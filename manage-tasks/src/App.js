import { useState } from "react";
import "./App.css";

function App() {
  let agenda_list = [
    {
      title: "BAU Activities",
      description: "Regular activities of business.",
      task: [
        "Create Catalog",
        "Provide role to users",
        "Add user to group",
        "Schedule Report",
        "Create report",
      ],
    },
  ];

  const [view, setView] = useState("form-view");
  const [agendaList, setAgendaList] = useState(agenda_list);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      {view === "form-view" ? (
        <div id="submit-form" className="container-fluid m-4">
          <div class="m-4">
            <button
              type="submit"
              class="btn btn-md btn-primary"
              onClick={() => setView("list-view")}
            >
              View Agenda List
            </button>
          </div>
          <div class="card w-75 m-4">
            <div class="card-header text-bg-danger">
              <h4>New Agenda Form</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="agendaTitle" class="form-label">
                    *Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="agendaTitle"
                    aria-describedby="agendaTitleError"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {title ? (
                    ""
                  ) : (
                    <small id="agendaTitleError" class="form-text text-danger">
                      *This field is required.
                    </small>
                  )}
                </div>
                <div class="mb-3">
                  <label for="agendaDesc" class="form-label">
                    *Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="agendaDesc"
                    aria-describedby="agendaDescError"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  {desc ? (
                    ""
                  ) : (
                    <small id="agendaDescError" class="form-text text-danger">
                      *This field is required.
                    </small>
                  )}
                </div>
                <div class="mb-3">
                  <label for="agendaTask" class="form-label">
                    *Task name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="agendaTask"
                    aria-describedby="agendaTaskError"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  {task ? (
                    ""
                  ) : (
                    <small id="agendaTaskError" class="form-text text-danger">
                      *This field is required.
                    </small>
                  )}
                </div>
              </form>
            </div>

            <div class="card-footer text-end text-bg-secondary">
              <button
                type="button"
                class="btn btn-warning m-1"
                onClick={() => {
                  if (task.trim()) {
                    setTasks((prevValue) => [...prevValue, task]);
                    setTask("");
                  }
                }}
                disabled={task.trim() ? false : true}
              >
                Add Task ++
              </button>
              <button
                type="button"
                class="btn btn-warning m-1"
                onClick={() => {
                  if (tasks.length > 0 && title && desc) {
                    if (task.trim())
                      setTasks((prevTask) => [...prevTask, task]);
                    let obj = {};
                    obj.title = title;
                    obj.description = desc;
                    obj.task = tasks;
                    setAgendaList((prevAgenda) => [...prevAgenda, obj]);

                    setTitle("");
                    setDesc("");
                    setTask("");
                    setTasks([]);
                  }
                }}
                disabled={
                  title.trim() && desc.trim() && tasks.length > 0 ? false : true
                }
              >
                Add Agenda ++
              </button>
            </div>
          </div>
          {tasks.length > 0 ? (
            <div class="card w-75 m-4">
              <ul class="list-group list-group-flush">
                {tasks.map((task) => (
                  <li class="list-group-item">{task}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div id="view-form" className="container-fluid m-4">
          <div class="m-4">
            <button
              type="submit"
              class="btn btn-md btn-primary"
              onClick={() => setView("form-view")}
            >
              Go to Agenda Form
            </button>
          </div>
          {agendaList.map((itemsList) => (
            <div class="card w-75 m-4">
              <div class="card-header text-bg-danger">
                <h4>{itemsList.title}</h4>
                <small>{itemsList.description}</small>
              </div>
              <ul class="list-group list-group-flush">
                {itemsList.task.map((taskList) => (
                  <li class="list-group-item">{taskList}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
