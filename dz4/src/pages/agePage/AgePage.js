
import style from './agePage.module.css'
const AgePage = () => {
    const agePrompt= ()=>{
        const askAge=prompt('Сколько тебе лет? ')
        if(askAge>=18){
            alert('Можно войти')
        }else{
            alert('Нельзя входить')
        }

    }


    return (
        <>
            <button onClick={agePrompt} className={style.button}>Сколько тебе лет</button>
        </>
    );
};

export default AgePage;