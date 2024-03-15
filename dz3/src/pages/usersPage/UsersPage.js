import style from './usersPage.module.css'

export  function UsersPage({array}){
    return(
        <>
            <ul className={style.list}>
                {
                    array.map((elem, index) =><li key={index}>name: {elem.name} , age: {elem.age} </li>)
                }
            </ul>
        </>

    )
}