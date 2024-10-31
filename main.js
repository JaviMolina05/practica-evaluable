import './style.css'
let arraydiv = document.querySelectorAll("div");
arraydiv[0].className = "container";
arraydiv[1].className = "search";
arraydiv[2].className = "li-container";
arraydiv[3].className = "empty";
arraydiv[4].className = "task-count";

let button = document.querySelector("button");
button.className = "btn-add";
let ul = document.querySelector("ul");
let task_counter = 0;
let span_array = arraydiv[4].querySelectorAll("span");
let text_input = document.querySelector("input");



let buttons_event = () => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    let p = document.createElement("p");
    let span = document.createElement("span");
    span.textContent = text_input.value;
    text_input.value = "";
    let button_del = document.createElement("button");
    button_del.textContent = "X";
    button_del.className = "btn-delete";
    arraydiv[3].textContent = "";
    task_counter++;
    span_array[1].textContent = task_counter;
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(button_del);
    p.appendChild(span);
    let spanEvent = () => {
      span.addEventListener("click", (e) => {
        (span.style.textDecoration === "line-through") ?
          span.style.textDecoration = "none" :
          span.style.textDecoration = "line-through";
      });
    }
    spanEvent();
    let deleteEvent = () => {
      button_del.addEventListener("click", (i) => {
        let li_array = document.querySelectorAll("li");
        li.remove();
        task_counter--;
        span_array[1].textContent = task_counter;
      });
    }
    deleteEvent();
    if (ul.childNodes === "empty") {
      arraydiv[3].firstChild.textContent = "You have no pending tasks."
    }
  })
}
buttons_event();