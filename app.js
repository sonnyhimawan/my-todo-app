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





// My Todo 


let myTodolist = [];
let id = 0;


// Get Element 

const myForm = document.getElementById("todo-form");


// End GET Element


//  Function Add Todo

const addTodo = () => {

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
 
    data = {
    id : id++, 
    priority : document.getElementById("input-priority").value,
    date : document.getElementById("input-date").value,
    task : document.getElementById("input-todo").value.trim(),
    status : false
    };

    myTodolist.push(data);

    myForm.reset();
   



    if (data.priority === "" || data.date === "" || data.task === "") {
     alert("Silahkan isi seluruh form");
    } else {
      alert("Data Berhasil Ditambahkan");
      console.log(myTodolist);
      localStorage.setItem("data",JSON.stringify(myTodolist));
    }
  });

}

addTodo();


// End Function Add Todo


































































