import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Child1 from "./components/Child1";

const root = ReactDOM.createRoot(document.getElementById("root"))

// const Hello = () => <h1>Hii React</h1>

export const UserContext = createContext();


root.render(<UserContext.Provider value={"Rohit"}>
    <Child1 />
</UserContext.Provider>)


// step 1 => create context 
// step 2 => wrap all child in provider
// step 3 => pass a value 
// step 4 => consume it 