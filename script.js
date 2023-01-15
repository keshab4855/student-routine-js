"use strict";

let entryList = [];
let completedList = [];
let totalHours = 24;
////////////////////form submit handler////////////////////
const handleOnSubmit = (e) => {
  const formData = new FormData(e);
  // const tasks = formData.get("tasks");
  // const hours = formData.get("hours");
  const tasks = document.getElementById("add-tasks").value;
  const hours = document.getElementById("add-hours").value;
  const obj = { tasks, hours };
  entryList.push(obj);
  display(entryList);
};

// /////////////displaying the tasks////////////////////
const display = (taskArr) => {
  let str = "";
  taskArr.map((item, index) => {
    item.hours < totalHours
      ? (str += `                <tr>
            <th >${index + 1}</th>
                        <td>${item.tasks}</td>
                        <td>${item.hours} hrs</td>
                        <td><button onclick = "switchToCompleted(${index})" class="btn btn-primary">
                                <i class="bi bi-check-circle-fill"></i>

                            </button>
                            <button onclick ="allTaskDelete(${index})" class="btn btn-danger"> <i class="bi bi-trash3-fill"></i></button>
                        </td>
                             </tr>  
                        `)
      : alert("You have exceed the daily hour limit");
  });
  document.getElementById("display-tasks").innerHTML = str;
};

/////////////////////handling all task delete button///////////////
const allTaskDelete = (index) => {
  const filteredArr = entryList.filter((item, i) => index !== i);
  entryList = filteredArr;
  display(entryList);
};

////////////////////swicthing all task to completed task//////////
const switchToCompleted = (index) => {
  const completedTasks = entryList.splice(index, 1);
  completedList.push(completedTasks[0]);
  display(entryList);
  displayCompleted(completedList);
};

/////////////////////display completed tasks////////////////////
const displayCompleted = (arg) => {
  let str = "";
  arg.map((item, index) => {
    str += `                <tr>
            <th >${index + 1}</th>
                        <td>${item.tasks}</td>
                        <td>${item.hours} hrs</td>
                        <td><button onclick = "switchToPendingTask(${index})" class="btn btn-success">
                                <i class="bi  bi-arrow-up-circle-fill"></i>

                            </button>
                            <button onclick ="deleteCompletedList(${index})" class="btn btn-danger"> <i class="bi bi-trash3-fill"></i></button>
                        </td>
                             </tr>  
                        `;
  });
  document.getElementById("completed-table").innerHTML = str;
};

////////////////////////Clearing all////////////////////////////////
document.getElementById("clear-btn").addEventListener("click", () => {
  // console.log(entryList);
  entryList = [];
  completedList = [];

  display(entryList);
  displayCompleted(completedList);
});

//////////////////////deleting the completed Tasks///////////////////
const deleteCompletedList = (index) => {
  const filteredArr = completedList.filter((item, i) => index !== i);
  completedList = filteredArr;
  displayCompleted(completedList);
};

///////////////////switching to pending tasks////////////////
const switchToPendingTask = (index) => {
  const switchingTask = completedList.splice(index, 1);
  entryList.push(switchingTask[0]);
  display(entryList);
  displayCompleted(completedList);
};
