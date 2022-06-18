const Api = "https://api.github.com/users/ElzeroWebSchool/repos";

/*
    for x of     (x === value)
        String
        array
        // NO  object 

    for x  in     (x === index)
        Array
        String
        object   (x === key)
*/
// Search =>  Cross Origin Api | Api authentication
/*
    XMLHTTPREQUEST
        request.readyState (0,1,2,3,4)
            0  =>    UNSENT
            1  =>    OPENED
            2  =>    HEADERS_RECEIVED: 
            3  =>    LOADING
            4  =>    DONE
        -----------------------
        request.responseText === request.response
            response text (html ,xml ,txt ,json)
        -------------
        request.status
            200     =>  success
            404     =>  Not Found...
        ---------------
        request.responseUrl
            get the used url in open( , url ,)   method
        ---------------
        request.onprogress = () => {} 
            on processing the request  readyState === 3 
        
*/
/*
    await           wait for and Get Promise result
*/

// getting all required elements
// function ( showTasks()  /  deleteTask() )

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
let arrayList = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos')) :
    [];

inputBox.oninput = function () {
    if (this.value.trim() !== "") {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
};

inputBox.addEventListener('focus', function () { 
    document.onkeyup = function (event) { 
        if (event.key === "Enter" && inputBox.value.trim() !== "" ) { 
            addBtn.click();
    }
    }
})
addBtn.addEventListener('click', function (event) {
    let inputValue = inputBox.value;
    if (inputValue.trim() !== "") {
        addToArray(inputValue);
        showTodos()
    }
})

function addToArray(text) {
    let todo = {
        title: text,
        time: Date.parse(new Date())
    }
    arrayList.push(todo)
    localStorage.setItem("todos", JSON.stringify(arrayList))
}
function showTodos() {
    let todoElements = "";
    arrayList.forEach((el, index) => {
        todoElements += `
        <div class ="todo">
        <span class = "todo-title" >${el.title} </span>
        <button onclick =" deleteTodo(${index})" class = "icon"><i class="fas fa-trash"></i></button>
        </div>
        ` ;
    })
    if (arrayList.length > 0) {
        deleteAllBtn.classList.add('active')
    }
    else {
        deleteAllBtn.classList.remove('active')
    
    }
    todoList.innerHTML = todoElements;
    let count = document.querySelector('.pendingTasks');
    count.innerHTML = arrayList.length;

}
showTodos();


function deleteTodo(index) {
    arrayList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(arrayList))
    showTodos()
}

deleteAllBtn.addEventListener('click', function () {

    if (arrayList.length !== null) {
        this.classList.add('active')
        arrayList = []
        localStorage.setItem('todos', JSON.stringify(arrayList))
    } else {

        this.classList.remove('active')
    }
    showTodos();
})