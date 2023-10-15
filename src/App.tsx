import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
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
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <div className="button-container">
                <Button name={'inc'} callback={incHandler}/>
                <Button name={'set'} callback={setToLocalStorageHandler}/>
                <Button name={'get'} callback={getFromLocalStorageHandler}/>
                <Button name={'clear'} callback={clearLocalStorageHandler}/>
                <Button name={'remove'} callback={removeLocalStorageHandler}/>
            </div>
        </div>
    );
}

export default App;
