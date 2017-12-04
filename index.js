var todo = document.getElementById("todo-items")
var button = document.getElementById("todo-button")
var field = document.getElementById("todo-field")

button.onclick = function()
{
  todo.innerHTML += "<p>" + field.value + "</p>"
}
