import { useContext } from "react";
import { UserContext } from "../useContext";

const Child3 = () => {
   const user = useContext(UserContext)
    return (
        <div>
            <h1>Child 3</h1>
         <h2>{user}</h2>
        </div>
    )
}
export default Child3;