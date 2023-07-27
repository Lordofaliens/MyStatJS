import React, { useContext, useState, Dispatch, FC } from "react";
import { MainContext } from "../contexts/MainContext";

//added name atribute

interface PropsInterface {
  value: string;
  name: string;
  age: number;
  arr: number[];
  abc: number;
  setA: Dispatch<number>
  fn: () => void;
}

export const Counter: FC<PropsInterface> = (props: PropsInterface) => {
  console.log(props.value, props.name, props.age, props.arr, props.abc, props.setA);

  props.fn();

  const {renderPosts} = useContext(MainContext)!;
 
  const [counter, setCounter] = useState<number>(0);
  const [isCounterEnabled, setIsCounterEnabled] = useState<boolean>(true);
  //added name useState
  const [name, setName] = useState<string>("name");

  const names: string[] = ["name1", "name2", "name3"];

  console.log(counter);

  const onClickButton = (isIncrement: boolean) => {
    setCounter(isIncrement ? counter + 1 : counter - 1);
  };

  const toggleCounterAvailability = () =>
    setIsCounterEnabled(!isCounterEnabled);

  return (
    <div className="counter">
      {/* name displayed */}
      <h2 style={{textAlign:"center"}}>Your name: {name}</h2>

      {/* list of names displayed */}
      <div style={{display:"flex", justifyContent:"center"}}>
        <p style={{margin:"5px", color:"white", fontSize:"1.2rem", fontWeight:"bold"}}>Name options : </p>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          {names.map((name, i) => (
            // setUseState is used to avoid overloading file with methods
            <span key={`${name}-${i}`} onClick={() => setName(name)} style={{margin:"5px", color:"white", cursor:"pointer"}}>{name}</span>
          ))}
        </div>
      </div>
      <div className="counter-bottom">
        <button onClick={toggleCounterAvailability}>
          {isCounterEnabled ? "Hide" : "Show"} counter
        </button>
        
        {/* fixed counter hide */}

        {isCounterEnabled && (
          <div style={{display:"flex"}}>
            <h1 style={{margin:"5px",verticalAlign:"middle"}}>Counter: <span>{counter}</span></h1>
            {counter < 10 && <button onClick={() => onClickButton(true)}>+</button>}
            <button onClick={() => onClickButton(false)}>-</button>
            <button onClick={() => setCounter(0)}>Reset</button>
          </div>
        )}
      </div>
    </div>
  );
};
