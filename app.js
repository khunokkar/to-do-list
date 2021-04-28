const addToDo = document.querySelector('.addToDo')
const toDoInput = document.querySelector('.toDoInput')
const toDos = document.querySelector('.toDos') // ul

addToDo.addEventListener('click',addToDoToForm)
toDoInput.addEventListener('keypress', (e)=>{
  if(e.key == "Enter"){
    addToDoToForm()
  }
})

function doneToDo(e){
  const li = e.target.parentElement.parentElement
  li.children[0].classList.add('finish')  
}
function deleteTodo(e){
  const li = e.target.parentElement.parentElement
  li.remove()
}

function addToDoToForm(){
  const todo = toDoInput.value
  if(todo === "") return
  const node = document.createElement("li")
  node.classList.add('list-group-item')
  node.innerHTML = `
  <span class="todo">${todo}</span>
  <span class="btns">
    <button type="button" class="btn btn-outline-success done">Done</button>
    <button type="button" class="btn btn-outline-danger delete">Delete</button>
  </span>
  `
  toDos.appendChild(node)
  toDoInput.value = ""

  const done = document.querySelectorAll('.done')
  const deleteTask = document.querySelectorAll('.delete')
  done.forEach(x => x.addEventListener('click',doneToDo))
  deleteTask.forEach(x => x.addEventListener('click',deleteTodo))
}


