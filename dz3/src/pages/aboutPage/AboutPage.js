import style from './aboutPage.module.css'
export function AboutPage({object}){
    return(
        <>
            <h2 className={style.title}>{object.title}</h2>
            <p className={style.text}>{object.descr}</p>
        </>
    )
}