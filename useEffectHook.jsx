import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));



function Counter (){
const [count, setCount] = useState(0);

// variation in useEffect

// 1. runs on every render
// useEffect(() => {
//     alert(count)
// })

// 2. runs on only first render
// useEffect(() => {
//     alert("only one time it will render")
// },[])

// 3. runs only when depender array will change in this example count
// useEffect(() => {
//     alert("work when count change")
// },[count])

// function update (){
//     setCount(count+1);
// }

// 4. mutiple dependies => 
// useEffect(() => {
//     alert("work when count change")
// },[count , total])




    return (
        <>
        <button onClick={update}>Counter is : {count}</button>
        <br />
        <p>count is {count}</p>
        </>
    )
}

function PractiseQuestion(){
// 1.Show an alert when the page opens.
// useEffect(() => {
//     alert("Page loaded")
// },[])

// 2.Change the page title to "Page Loaded" when the page opens — Do you want step-by-step guidance?

// useEffect(() => {
//     alert("Page loaded");
//     document.title = "Page fully loaded"
//   },[])

// 3. Start a timer that shows "Timer Started" in the console every second when the page opens.

useEffect(() => {
    setInterval(() => {
        console.log("Time stated")
    },1000)
    
})

    return (
        <>
        <h1>Loading....</h1>
        </>
    )
}


function App() {
    const [count, setCount] = React.useState(0);
  
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //       console.log("Timer Running");
    //     }, 1000);
    //   }, [count]);

    useEffect(() => {
        let timer = setInterval(() => {
          console.log("Timer Running");
        }, 1000);
      
        return () => {
          console.log("Timer Stopped");
          clearInterval(timer);
        };
      }, [count]);
      
      
    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </>
    );
  }
  

root.render(<App  />)





