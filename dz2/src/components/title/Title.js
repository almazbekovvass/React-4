
 export function Title ({object}) {
     console.log({object})

    return (
        <>
            <h2>{object.title}</h2>
            <p>{object.subtitle}</p>
        </>
    )
}