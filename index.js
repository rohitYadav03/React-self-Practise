import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// --------------------------------------------JSX Practise------------------------------------------------------------

// const username = "Rohit";
// const heading = <h1>Hello, {username}</h1>;

// function getGreeting(name){
//     return `Welcome, ${name}!`
// }

// const heading2 = <h2>{getGreeting(username)}</h2>

// let num1 = 10;
// let num2 = 20;

// let paragraph = <p>Sum : {num1+num2}</p>

// const isLoggedIn = true;
// const heading3 = <h3>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h3>

// let showMessage = true;

// let message = <p>{showMessage && "This is a secret message!"}</p>

// const heading2 = <h2 style={{color: "blue"}}>Hello</h2>

// const imageUrl = "https://via.placeholder.com/150";
// const image = <img src={imageUrl} alt="image" />

// function handleClick(){
//     console.log("Button clicked");
// }

// const btn = <button onClick={handleClick}>Click Me</button>

// const reactFrag = (
//     <>
//     <h1>Hello</h1>
//     <p>Welcome to React</p>
//     </>
// );

// const fruits = ["Apple", "Banana", "Cherry"];
// let list = fruits.map((curFruit) => {
//   return <li>{curFruit}</li>
// })

// function WelcomeMessage(){
//     return <h2>Welcome to React, Rohit! 🎉</h2>
// }


// -------------------------- Functional Component Practise -------------------------------------------------------------------
//1. Create a Profile component that displays a name, age, and location.

  function Profile (){
 return (  <>
    <h1>Name: Rohit</h1>
    <h2>Age: 22</h2>
    <p>location: Jamshedpur</p>
    </>)
  }

// Create a ProductCard component with title, price, and "Buy Now" button.

const ProductCard1 = () => {
 return ( 
     <>
     <h2>SHOE</h2>
     <h3>Price : 10000</h3>
     <button>Buy Now</button>
    </>)
}

// Create a BlogPost component with a title and content, then use it inside an ArticleList component.

const BlogPost = () => {
 return (
    <>
    <h2>How React Work ??</h2>
    <p>React is a JavaScript library that follows a component-based architecture and optimizes UI updates using the Virtual DOM.
Instead of directly updating the Real DOM (which is slow), React creates a lightweight Virtual DOM (a JavaScript object).
When a component's state or props change:
1️⃣ React creates a new Virtual DOM and compares it with the previous one using the Diffing Algorithm.
2️⃣ It finds the differences (minimal updates required) and efficiently updates only the necessary parts of the Real DOM—this process is called Reconciliation.
This makes React fast, efficient, and optimized for performance.</p>
    </>
  )
}
const ArticleList = () => {
  return  <BlogPost />
}

// Modify Profile to accept props (we'll cover props next).

function ProfileModify (props){
    return (  <>
       <h1>Name: {props.name}</h1>
       <h2>Age: {props.age}</h2>
       <p>location: Jamshedpur</p>
       </>)
     }

// Create a Counter component that shows a number (we'll use useState soon!).

function Counter (){
    return <h1>4</h1>
}

// root.render(<Counter />)

// root.render(<ProfileModify name= "Rohit" age= "22"/>)


// ----------------------------Prop Practise---------------------------------------

// 1️⃣ Create a Greeting component that takes a name prop and displays "Hello, [name]!"

const Greeting = (prop) => {
    return <h1>Hello, {prop.name}</h1>
}

// 2️⃣ Create a ProfileCard component that takes name, age, and location as props and displays them.

function ProfileCard (props){
   return(
    <>
    <h2>Name: {props.name}</h2>
    <h3>Age: {props.age}</h3>
    <p>location: {props.location}</p>
    </>
   )
}
// root.render(<ProfileCard name= "Rohit" age={22} location="Agrico"/>)

// 3️⃣ Create a TimeCounter component that receives an initial count as a prop and displays it.

const TimeCounter  = ({number:time}) => {
   return (
    <>
    <h2>{time}</h2>
    </>
   )
}

// 4️⃣ Create a ProductCard component that receives a product object as a prop and displays product details.

const productInfo = {
    name: "Shoe"
    
}

const ProductCard = ({item}) => {
      return(
        <>
        <h1>{item.name}</h1>
        <h1>{item?.price || 200}</h1>
        
        </>
      )
}

// Assignment: Create a Profile Card component that accepts name, age, and bio as props.

const ProfileCard2 = ({name,age,bio}) => {
   return ( 
    <>
    <h2>{name}</h2>
    <h3>{age}</h3>
    <h4>{bio}</h4>
    </>
   )
}

// root.render(<ProfileCard name= "Rohit" age={22} bio="CS student" />)


// -----------------useState Hook ---------------------------------------------------------------------------------

function Counter() {
    const [count, setCount] = useState(); // Step 1: Create a state variable
  
    return (
      <div>
        <p>Count: {count}</p> {/* Step 2: Display the state */}
        <button onClick={() => setCount(count + 1)}>Increment</button> {/* Step 3: Update state */}
      </div>
    );
  }


//    Practice Task – Build a Toggle Button 

const ToggleButton  = () => {
    const [button, setButton] = useState("ON");
   return  (
      <>
      {/* <button onClick={function(){ button === "ON" ? setButton("OFF") : setButton("ON")}}>{button}</button> */}
      {/* <button onClick={() => setButton(function(val){
        if(val === "ON"){
          return "OFF"
        }
        else{
            return "ON"
        }
      })}>{button}</button> */}
      <button onClick={() => setButton(function (val){
     return   val === "ON" ? "OFF" : "ON";
      })}>{button}</button>
      </>
)
}

root.render(<ToggleButton />)  