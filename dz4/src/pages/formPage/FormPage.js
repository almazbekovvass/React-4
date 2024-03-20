import React from 'react';
import style from './formPage.module.css'
const FormPage = () => {
    const sendButton= (e)=>{
        e.preventDefault()
        const objectSendButton={title: "Hello", body: "world"}
        console.log(objectSendButton)
    }
    const cancelButton=()=>{
        console.log('Отмена')
    }
    return (
        <>
            <form onSubmit={sendButton} onReset={cancelButton}>
                <button type='submit' className={style.buttons}>SEND</button>
                <button type='reset' className={style.buttons}>CANCEL</button>
            </form>
        </>
    );
};

export default FormPage;