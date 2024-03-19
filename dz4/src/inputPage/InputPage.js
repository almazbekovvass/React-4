import React from 'react';
import style from './inputPage.module.css'

const InputPage = () => {
    const focusInput=(event)=>{
        const valueInput= event.target.value
        console.log(valueInput*10)
    }
    return (
        <>
            <input type="number" onBlur={focusInput} placeholder='Введите цифру' className={style.input}/>
        </>
    );
};

export default InputPage;