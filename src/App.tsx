import React, {useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        if (value) {
            localStorage.setItem('counterValue',JSON.stringify(value))
        }
    }, [value])
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    const incHandler = () => {
        setValue(value + 1)
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const setIntervalLocalStorageHandler = () => {

    }
    return (
        <div className="App">
            <h1>{value}</h1>
            <div className="button-container">
                <Button name={'inc'} callback={incHandler}/>
                <Button name={'reset'} callback={clearLocalStorageHandler}/>

                <Button name={'set'} callback={setIntervalLocalStorageHandler}/>
            </div>
        </div>
    );
}

export default App;


//-----------------------------------------------------------------------
/*const incHandler = () => {
    setValue(value+1)
}
const setToLocalStorageHandler = () => {
    localStorage.setItem('counterValue',JSON.stringify(value))
}
const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setValue(newValue)
    }
}
const clearLocalStorageHandler = () => {
    localStorage.clear()
    setValue(0)
}
const removeLocalStorageHandler = () => {
    localStorage.removeItem('counterValue')
}*/

//______________________________________________________________________

/*
useEffect(() => {
    localStorage.setItem('counterValue',JSON.stringify(value))
}, [value])
useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setValue(newValue)
    }
}, [])

const incHandler = () => {
    setValue(value+1)
}
const clearLocalStorageHandler = () => {
    localStorage.clear()
    setValue(0)
}*/
