// console.log("Coucou")

// const todos = [ 
//   {title: "eat a big burger !!!", done: false},
//   {title: "sleep", done: false},
//   {title: "drink wine and a beer ", done: true}
// ]

// const todosContainer = document.getElementById('todosContainer');

// todos.forEach(todo => {
//   let checked = "";
//   if (todo.done) {
//     checked = "checked";
//   }
//   const card = `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex"><input class="d-flex form-check-input me-1" type="checkbox" ${checked}><div>${todo.title}</div></div>` 
//   todosContainer.insertAdjacentHTML('beforeend', card)
// });

// const btn = document.querySelector('button');
// const input = document.querySelector('.form-control');


// btn.addEventListener('click', (event) => {
//   const card = `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex"><input class="d-flex form-check-input me-1" type="checkbox"><div>${input.value}</div></div>` 
//   todosContainer.insertAdjacentHTML('beforeend', card);
//   input.value = "";
// });

import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "eat a big burger !!!", done: false},
        { title: "sleep", done: false},
        { title: "drink wine and a beer ", done: true}
      ],
      newTodo: ""
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.newTodo, done: false, index: this.todos.length })
    },
    removeTodo(index) {
      console.log(`index: ${index}`)
      this.todos.splice(index, 1)
    }
  }
}).mount('#todosContainer')