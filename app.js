// Set Date Time





function myDateNow() {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };

  const formattedDate = date.toLocaleDateString("id-ID", options);
  document.getElementById("date").innerText = formattedDate;
  document.getElementById("time").innerText = date.toLocaleTimeString();


}


myDateNow();

setInterval(myDateNow, 1000);

// End Date





let myTodolist = JSON.parse(localStorage.getItem("itemTodo")) || [];
let id = myTodolist.length > 0 ? myTodolist[myTodolist.length - 1].id + 1 : 1;
const myForm = document.getElementById("todo-form");

//  Function Add Todo

const addTodo = () => {


  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    itemTodo = {
      id: id++,
      priority: document.getElementById("input-priority").value,
      date: document.getElementById("input-date").value,
      task: document.getElementById("input-todo").value.trim(),
      status: false
    };

    if (itemTodo.priority === "" || itemTodo.date === "" || itemTodo.task === "") {
      alert("Silahkan isi seluruh form");
      return;
    } else {
      alert("Data Todolist Berhasil Ditambahkan");
    }

    myTodolist.push(itemTodo);
    saveTodo();
    myForm.reset();
    renderTodo();

  });

}

addTodo();


// End Function Add Todo

const saveTodo = () => {
  localStorage.setItem("itemTodo", JSON.stringify(myTodolist));
}




const activeTodo = () => {

  const myTab = document.getElementById("tab");
  myTab.addEventListener("click", (e) => {

    const tabActive = e.target.closest("[data-tab]");
    if (!tabActive) return;
    const tabName = tabActive.dataset.tab;
    myTab.querySelectorAll('[data-tab]').forEach(e => {
      e.classList.remove('text-lg', 'border-b-2', 'text-blue-600', 'font-medium');
    });
    tabActive.classList.add('cursor-pointer', 'border-b-2', 'text-lg', 'font-medium', 'text-blue-600', 'inline-block', '-mb[1px]');
    showTabContent(tabName);
  });

}

activeTodo();


const showTabContent = (tabActive) => {

  const myContent = {
    todo: document.getElementById("list-todo"),
    done: document.getElementById("list-done"),
    overdue: document.getElementById("list-overdue")
  }

  for (const key in myContent) {
    if (key === tabActive) {
      myContent[key].classList.remove("hidden");
    } else {
      myContent[key].classList.add("hidden");
    }
  }
};



















































