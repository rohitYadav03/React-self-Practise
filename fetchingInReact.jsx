import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

// function FetchData() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
  
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to Fetch Data");
//           }
//           return response.json();
//         })
//         .then((result) => {
//           setData(result);
//           setLoading(false);
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading(false);
//         });
//     }, []);
  
//     if (loading) return <h1>Loading...</h1>;
//     if (error) return <h1>{error}</h1>;
  
//     return (
//       <ul>
//         {data.slice(0, 5).map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     );
//   }
  
//   Question Practise 

// 1. Fetch users from this API:
// 👉 https://jsonplaceholder.typicode.com/users
// Show the name and email on the page.
// Add a Loading... message while fetching.
// Show Error if the API fails.

function FetchUser (){
const [loading,setLoading] = useState(true)
const [data, setData] = useState([]);
const [error , setError] = useState(false)
    
useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((res) =>{ 
        if(!res.ok) {
          throw new Error("Network Problem")
        }
    return res.json()
  })
       .then((result) => { 
        setData(result) 
       setLoading(false)
      })
       .catch(() =>{
        setError(true)
         setLoading(false)}
      )
          
      
    }
    ,[]);

    return(
     <>
  {error && <h1>Error to fetch</h1>}
     { loading ? ( 
      <h1>Loading...</h1>
    ) : 
    ( <ul>
      {data.map((curElem) => 
      <li key={curElem.id}>
        <p>Name :{curElem.name}</p> 
        <h3>Email : {curElem.email}</h3>
        </li> 
      )}
     </ul>
     )}
     </>
    );
}

// Fetch posts from this API:
// 👉 https://jsonplaceholder.typicode.com/posts
// Show title and body.
// Add a button "Fetch Posts" to manually fetch data.
// Show Loading... only when the button is clicked.



root.render(<FetchUser />)
