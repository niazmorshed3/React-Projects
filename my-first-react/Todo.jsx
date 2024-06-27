// export default function Todo({task,isDone }) {
//   return <li>Task: {task}</li>;
// }

// Conditional Rendaring Option 1
// export default function Todo({task,isDone }) {
//   if(isDone === true){
//     return <li>Finished : {task}</li>
//   }
//   else{
//     return <li>Work On : {task}</li>
//   }
// }


// Conditional Rendaring Option 2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task}</li>;
//   }
//   return <li>Work On : {task}</li>;
// }


// Conditional Rendaring Option 3 [Ternary Operator]

// export default function Todo({ task, isDone }) {
//   return (
//     <li> {isDone ? "Finished" : "Joldi Sesh Kor"} : {task}</li>
//   )

// }


// Conditional Rendaring Option 4 &&
// export default function Todo({task,isDone }) {
//   return <li>{task} {isDone && ': Done' }</li>;
// }




// Conditional Rendaring Option 5 ||
// export default function Todo({task,isDone }) {
//   return <li>{task} {isDone || ': Sesh Koren Sir' }</li>;
// }



// Conditional Rendaring Option 6
export default function Todo({ task, isDone }) {
  let listItem ;
  if (isDone) {
    listItem = <li>Finished : {task}</li>;
  }
  else {
    listItem = <li>Work On : {task}</li>;
  }
  return listItem;
}
