"use strict";

let entryList = [];
let completedList = [];

const handleOnSubmit = (e) => {
  const formData = new FormData(e);
  const tasks = formData.get("tasks");
  const hours = formData.get("hours");
  //   const tasks = document.getElementById("add-tasks").value;
  //   const hours = document.getElementById("add-hours").value;
  const obj = { tasks, hours };
  entryList.push(obj);
  display(entryList);
};

const display = (taskArr) => {
  let str = "";
  taskArr.map((item, index) => {
    str += `                <tr>
            <th >${index + 1}</th>
                        <td>${item.tasks}</td>
                        <td>${item.hours} hrs</td>
                        <td><button class="btn btn-primary">
                                <i class="bi bi-check-circle-fill"></i>

                            </button>
                            <button class="btn btn-danger"> <i class="bi bi-trash3-fill"></i></button>
                        </td>
                             </tr>  
                        `;
  });
  document.getElementById("display-tasks").innerHTML = str;
};

document.getElementById("clear-btn").addEventListener("click", () => {
  console.log(entryList);
  entryList = [];
  display(entryList);
});
