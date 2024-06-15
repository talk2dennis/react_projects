import { useState } from "react";
function Calculator() {
    const [display, setDisplay] = useState('0');
    const inputHandler = (value) => {
        setDisplay(value)
        if (value === 'c') {
            setDisplay('0')
        } else if (value === '=') {
            try {
                setDisplay(eval(display).toString())
            } catch (error) {
                setDisplay(error)
            } 
        } else {
            setDisplay(display === '0'? value : display + value )
        }
        
    }

    return (
        <>
            < CalculatorDisplay value={display} />
            <div className="calculator">
                <CalculatorButton value="7" onClick ={inputHandler} />
                <CalculatorButton value="8" onClick ={inputHandler} />
                <CalculatorButton value="9" onClick ={inputHandler} />
                <CalculatorButton className="opr" value="/" onClick ={inputHandler} />

                <CalculatorButton value="4" onClick ={inputHandler} />
                <CalculatorButton value="5" onClick ={inputHandler} />
                <CalculatorButton value="6" onClick ={inputHandler} />
                <CalculatorButton className="opr" value="*" onClick ={inputHandler} />

                <CalculatorButton value="1" onClick ={inputHandler} />
                <CalculatorButton value="2" onClick ={inputHandler} />
                <CalculatorButton value="3" onClick ={inputHandler} />
                <CalculatorButton className="opr" value="-" onClick ={inputHandler} />

                <CalculatorButton className="opr" value="c" onClick ={inputHandler} />
                <CalculatorButton value="0" onClick ={inputHandler} />
                <CalculatorButton className="opr" value="=" onClick ={inputHandler} />
                <CalculatorButton className="opr" value="+" onClick ={inputHandler} />
            </div>
        </>
    )
}

function CalculatorButton(props) {
    // function inputHandler() {
    //     console.log(`Button clicked with value: ${value}`)
    //     CalculatorDisplay(value)
    // }
    return (
            <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    )
}

function CalculatorDisplay({value}) {
    return (
            <div className="display">{value}</div>
    )
}

export default Calculator;