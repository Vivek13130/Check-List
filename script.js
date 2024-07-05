// let's start working on js

// first doing simple things like changing color based on status etc and the dropdown menu



// the main header task done :
handle_task_count_boxes();

function handle_task_count_boxes() {
      
      let total_task_box = document.querySelectorAll(".task-done")
      let total_task_avail = document.querySelectorAll(".total-task-avail")
      
      for (let i = 0; i < total_task_avail.length; i++){
            console.log(total_task_avail[i].innerHTML)

            if (total_task_avail[i].innerHTML == 0) {
                  total_task_box[i].classList.add("hidden");
                  console.log("removed task count boxes")
            }
            else if (total_task_box[i].classList.contains("hidden")) {
                  total_task_box[i].classList.remove("hidden");
            }
      }

}


//  using event delegation for handling all the sets and all :

// var sets = document.querySelectorAll(".set");
// console.log(sets);

// for (let i = 0; i < sets.length; i++){
//       sets[i].addEventListener('click', (e) => {
//             console.log("event executed : ")
//             console.log(e)
//       })
// }


document.querySelector("main").addEventListener('click', (e) => {
      console.log("event executed  :  ");
      console.log(e);
})