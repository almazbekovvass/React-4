import React, {useState} from 'react';
import style from './todolistPage.module.css'
import Link from "../components/link/Link";

const TodolistPage = () => {
    const [Case, setCase]= useState([])
    const [input, setInput]=useState('')

    const addCase=() =>{

        input==='' ? alert('Введите какое-то дело'): setCase([...Case , input])

    }
    const deleteCase=() =>{
        setCase([])
    }
    return (
        <>
            <input type="text" placeholder='Введите дело' className={style.input} onChange={event =>setInput(event.target.value)}/>
            <button className={style.addButton} onClick={addCase}>ADD</button>
            <button className={style.deleteButton} onClick={deleteCase}>DELETE</button>
            <ul className={style.block}>
                {
                    Case.map((el , index) => <Link link={el}/>)
                }
            </ul>
        </>
    );
};

export default TodolistPage;