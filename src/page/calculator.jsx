  import '../style/calculator.css';
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect  } from "react";

  const Calculator = () =>{
          const navigate = useNavigate()
          const [preState, setPreState] = useState("")
          const [curState, setCurState] = useState("")
          const [input, setInput] = useState("0");
          const [operator, setOperator] = useState("")
          const [total, setTotal] = useState(false)
          const [history, setHistory] = useState([]);

        
          const inputNum = (e) => {
            if (curState.includes(".") && e.target.innerText === ".") return;
          
            if (total) {
              setPreState("");
            }
          
            if (curState === "0") {
              setCurState(e.target.innerText);
            }
             else {
              setCurState((pre) => pre + e.target.innerText);
            }
          
            setInput(curState); 
            setTotal(false);
          };
        
          useEffect (() => {
            setInput(curState);
          }, [curState]);
          
          useEffect (() => {
            setInput(operator);
          }, [operator]);
        
        
          useEffect (() => {
            setInput("0");
          }, []);

          
          const operatorType = (e) => {
            setTotal(false);
            setOperator(e.target.innerText);
            if (curState === "") return;
            if (preState !== "") {
              equals();
            } else {
              setPreState(curState);
              setCurState("");
            }
          };
        
          const equals = (e) => {
            if (e?.target.innerText === "=") {
              setTotal(true);
            }
            let cal;

            switch (operator) {
              case "/":
                if (parseFloat(curState) === 0) {
                  cal = "Err";
                } else {
                  cal = String(parseFloat(preState) / parseFloat(curState));
                }
                break;
        
              case "+":
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
              case "X":
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
              case "-":
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
              default:
                return;
            }
            setInput("");
            setPreState(cal);
            setCurState("");
            const equation = `${cal}`;
            setHistory((prevHistory) => [...prevHistory, equation]);
          };
        
        
          const reset = () => {
            setPreState("0");
            setCurState("0");
            setInput("");
            setOperator(""); 
          };
        
          const del = () => {
            if (curState.length === 1) {
              setCurState("0");
              setInput("0");
            } else {
              const newCurState = curState.slice(0, -1);
              setCurState(newCurState);
              setInput(newCurState);
            }
          };
        
        
          return (
            <div className='main'> 
            <div className='container'>
              <div className='wrapper'>
                <div className='screen'>
                  {input !== '' || input === '0' ? (
                    <span>{input}</span>
                  ) : (
                    <span>{preState}</span>
                  )}
                  <ul>
                  {history.map((equation, index) => (
                    <li key={index}>{equation}</li>
                  ))}
                </ul>
                </div>
                <div className='btn' onClick={reset}>
                  C
                </div>
                <div className='btn' onClick={del}>
                  DEL
                </div>
                <div className='btn support' onClick={() => navigate('/support')}>
                  ?
                </div>
                <div className='btn orange' onClick={operatorType}>
                  /
                </div>
                <div className='btn' onClick={inputNum}>
                  1
                </div>
                <div className='btn' onClick={inputNum}>
                  2
                </div>
                <div className='btn' onClick={inputNum}>
                  3
                </div>
                <div className='btn orange' onClick={operatorType}>
                  X
                </div>
                <div className='btn' onClick={inputNum}>
                  4
                </div>
                <div className='btn' onClick={inputNum}>
                  5
                </div>
                <div className='btn' onClick={inputNum}>
                  6
                </div>
                <div className='btn orange' onClick={operatorType}>
                  -
                </div>
                <div className='btn' onClick={inputNum}>
                  7
                </div>
                <div className='btn' onClick={inputNum}>
                  8
                </div>
                <div className='btn' onClick={inputNum}>
                  9
                </div>
                <div className='btn orange' onClick={operatorType}>
                  +
                </div>
                <div className='btn zero' onClick={inputNum}>
                  0
                </div>
                <div className='btn orange equalto' onClick={equals}>
                  =
                </div>
              </div>
            </div>
            </div>
          );
  }

  export default Calculator