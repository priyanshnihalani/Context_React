import { useContext, useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({children}) => {
    
    const [count, setCount] = useState(0);

    function increment(){
        setCount((prev) => prev + 1)
    }
    function decrement(){
        setCount((prev) => prev - 1)
    }

    return(
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider