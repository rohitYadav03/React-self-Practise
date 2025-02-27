import React, { use } from "react";
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


// ----------------- useState Hook ---------------------------------------------------------------------------------

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

// ------------------------------------- Event in React ---------------------------------------------

// What is an event?
// An event is any user interaction with a webpage, like:
// ✔ Clicking a button (onClick)
// ✔ Typing in an input field (onChange)
// ✔ Submitting a form (onSubmit)
// ✔ Hovering over an element (onMouseEnter)

// React provides a way to handle these events using event handlers (functions that run when an event occurs).

// 1. onClick  Event =>

const SimpleButton = () => {

  let [btn,setBtn] = useState("Click Me")
  function buttonClick (){
    console.log("Button was clicked!");
    
  }
  return <button onClick={() => setBtn(prev => prev === "Click Me" ? "Clicked" : "Click Me")}>{btn}</button>

}

// root.render(<SimpleButton />)  

// 2. onChange
const InputField = () => {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed: {text}</p>
    </div>
  );
};

// root.render(<InputField />);

//3. onMouseEnter&onMouseLeave =>
const HoverBox = () => {
  const [color, setColor] = useState("blue");

  return (
    <div
      style={{ width: 100, height: 100, backgroundColor: color }}
      onMouseEnter={() => setColor("red")}
      onMouseLeave={() => setColor("blue")}
    >
      Hover me
    </div>
  );
};

// root.render(<HoverBox />);

// onSubmit =>
  const FormExample = () => {
    const [name, setName] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      alert(`Submitted Name: ${name}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  // root.render(<FormExample />);
  
// 1️⃣ Build a text input field where the user types, and 
// when they press "Enter," it logs the entered text in the console.

function InputComponent (){

  let [text, setText] = useState("");

  function change (e){
    setText(e.target.value)
  }

  function done (event){
   if(event.key === "Enter"){
    console.log(text);
    
   }
  }

  return (
    <>
    <input type="text" value={text} onChange={change} onKeyDown={done}></input>
    </>
  )

}

// 2️⃣ Create a "hover effect" where an image changes when the user hovers over it and returns to the original image when they move away.

function HoverEffect() {
  const [imageSrc, setImageSrc] = useState(
    "https://imgs.search.brave.com/9_ffpQpbN7MywrC5um2SJxdmIlYYgaq8Aws5P0GO4yI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE3LzM2Lzkx/LzM2MF9GXzgxNzM2/OTEwMV9VNU5rQVlR/MGNsUWM3cEpsVWFZ/SGh4Y1dyZ1lTSk9u/US5qcGc"
  );

  function changeImg() {
    setImageSrc(
      "https://imgs.search.brave.com/qXWKeVxghyyNRWi3tqFAebH2-Fewbo2X5HRv5jV5jZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE3LzM2Lzkx/LzM2MF9GXzgxNzM2/OTEwMV9VNU5rQVlR/MGNsUWM3cEpsVWFZ/SGh4Y1dyZ1lTSk9u/US5qcGc"
    );
  }

  function resetImg() {
    setImageSrc(
      "https://imgs.search.brave.com/9_ffpQpbN7MywrC5um2SJxdmIlYYgaq8Aws5P0GO4yI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE3LzM2Lzkx/LzM2MF9GXzgxNzM2/OTEwMV9VNU5rQVlR/MGNsUWM3cEpsVWFZ/SGh4Y1dyZ1lTSk9u/US5qcGc"
    );
  }

  return (
    <>
      <img
        src={imageSrc}
        alt="Hover to change"
        onMouseEnter={changeImg}
        onMouseLeave={resetImg}
        width="300"
        height="300"
      />
    </>
  );
}

// root.render(<HoverEffect />);


// 3. Create a password input field with a "Show Password" checkbox:

function PasswordComp (){
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  function updateInput(event){
     setPassword(event.target.value)
  }

  function show (event){
   setShowPassword(event.target.checked)
  }

  return(
      <>
      <input type={showPassword ? "text" : "password"}  value={password} onChange={updateInput}></input>
      <input type="checkbox" onChange={show} ></input>
      </>
  )
}
// 

function Login (){
 const [isLoggenIn, setIsLoggedIn] = useState("Logout");
 const [user, setUser] = useState("Guest")

 function checkLogin () {
  if (isLoggenIn === "Logout") {
     setIsLoggedIn("Login");
     setUser(""); 
  } else {
     setIsLoggedIn("Logout");
     setUser("Guest");  
  }
}


 return (
 <>
  <p>Hello {user}</p>
  <button onClick={checkLogin}>{isLoggenIn}</button>
  </>
)

}
// root.render(<Login />)

// ------------------  Rendering Lists & Keys --------------------------------------------------------------------

const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((curFruit, index) => {
        return <li key={index}>{curFruit}</li>
      })}
    </ul>
  );
}
root.render(<FruitList />)
