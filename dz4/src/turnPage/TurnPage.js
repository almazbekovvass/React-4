import React from 'react';
import style from './turnPage.module.css'
const TurnPage = () => {
    const turnBlock=(event)=>{
        event.target.classList.toggle(style.rotate)
    }
    return (
        <>
            <div className={style.block} onDoubleClick={turnBlock}></div>
        </>
    );
};

export default TurnPage;