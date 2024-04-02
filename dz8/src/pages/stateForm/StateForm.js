import React, {useState} from 'react';

const StateForm = () => {


    const [form , setForm]=useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    const changeInput = (event) =>{


        const {name, value} = event.target

        setForm({
            ...form,
            [name]:value
    })
    }
    const send = () =>{

        if(form.name==='' || form.username==='' || form.email===''){
            alert('Введите все данные')
        }


        const response = fetch('https://jsonplaceholder.typicode.com/users', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(form)
        })
    }

    return (
        <div>
                <input type="text" placeholder='Введите ваше имя' name='name' onChange={changeInput} value={form.name}/>
                <input type="text" placeholder='Введите вашу фамилию' name='username' onChange={changeInput} value={form.username}/>
                <input type="email" placeholder='Введите адресс почты' name='email' onChange={changeInput} value={form.email}/>
                <input type="number" placeholder='Введите номер телефона' name='phone' onChange={changeInput} value={form.phone}/>
                <input type="text" placeholder='Введите вебсайт' name='website' onChange={changeInput} value={form.website}/>
                <button  onClick={send}>send</button>
        </div>
    );
};

export default StateForm;