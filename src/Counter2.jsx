import { useContext } from "react";
import { AppContext } from "./Appcontext";
function Counter2() {
    const {counter, setCounter}=useContext(AppContext)

  return (
   <div className="container">
    Home
    <h2>
        Counter:{counter}
    </h2>
    <button onClick={()=>{
        setCounter(counter+1);

    }}>+</button>
   </div>
  );
}

export default Counter2;
