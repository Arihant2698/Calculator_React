import React from 'react'
import { useState } from 'react'
import './Calc.css'
function Calc() {
    const [result, setResult] = useState("");
    const [val, setVal] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
        console.log(result);
    }

    const handleClear = () => {
        setResult("");
    }
    const backspace = () => {

        setResult(result.substring(0,result.length-1))
    }
    const Calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("Error")
        }
    }
    
    return (
      
      <div >
            <div className='container'>
            <input type='text' value={result} onChange={handleClick}></input>
            {/* </div>
          <div> */}
        <div className='keybad'>
        <div>
            <button className='equalto' onClick={handleClear}>Clear</button>
            <button  onClick={backspace}>C</button>
            <button name="+" onClick={handleClick}>+</button>
        </div>
        <div>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" onClick={handleClick}>-</button>
        </div>   
        <div>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="/" onClick={handleClick}>/</button>
                    </div>
        <div>            
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="*" onClick={handleClick}>X</button>
                    </div>
            <button name="." onClick={handleClick}>.</button>
            <button name="0" onClick={handleClick}>0</button>
            <button className='equalto' name="=" onClick={Calculate}>=</button>
                    <div>
                        
           </div>
                </div>
    </div>

    </div>
  )
}

export default Calc