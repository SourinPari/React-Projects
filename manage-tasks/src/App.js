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
      <div class="container-fluid m-4">
        <div class="accordion w-75 m-4" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span class="text-success text-uppercase">
                  <strong>Instructions-</strong>
                </span>
              </button>
            </h4>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  This website creates agends according to your needs. Each
                  agenda record is a single entity containing a description of
                  the agenda and a list of pending tasks within that agenda.
                </p>
                <p>
                  The 'View Agenda List' button switches your view to a list of
                  agendas added by you. By default, you'll see a record already
                  created for you if you havn't created any agendas. The 'Go to
                  Agenda Form' button will switch your view back to the agenda
                  form, allowing you to create a new agenda. Both the 'Add Task'
                  and 'Add Agenda' button will be disabled by default. The 'Add
                  Task' button will be enabled only if there is some value in
                  the 'Task Name' field, and the 'Add Agenda' button will be
                  enabled if there are tasks already created and the 'Title' and
                  'Description' fields are non-empty.
                </p>
                <p>
                  <span class="text-primary">
                    Step by step process to create a new agenda-
                  </span>
                  <ul>
                    <li>
                      First fill the 'Task Name' field and add them using 'Add
                      Task' button.
                      <small class="text-danger">
                        (You must fill some value before the button is enabled)
                      </small>
                    </li>
                    <li>
                      Add 'n' number of tasks as needed.
                      <small class="text-danger">
                        (You'll be able to see the tasks below on the screen)
                      </small>
                    </li>
                    <li>
                      At the end fill the 'Title' and 'Description' field and
                      click on 'Add Agenda' button.
                    </li>
                    <li>
                      This will add a new agenda to your existing list of
                      agendas.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {view === "form-view" ? (
        <div id="submit-form" class="container-fluid m-4">
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
        <div id="view-form" class="container-fluid m-4">
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
