import React from 'react';
import {useForm} from "react-hook-form";

const HookForm = () => {
    const send = (data) =>{
        const response = fetch('https://jsonplaceholder.typicode.com/users', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }

    const {handleSubmit, register,
    formState:{errors}} =useForm()
    return (
        <div>

            <form onSubmit={handleSubmit(send)}>
                <input type="text" {...register('name',{required:true})}/>
                {errors.name && 'обьязательное поле'}
                <input type="text"  {...register('username',{required:true})}/>
                {errors.username && 'обьязательное поле'}
                <input type="email"  {...register('email',{required:true})}/>
                {errors.email && 'обьязательное поле'}
                <input type="number"  {...register('phone')}/>
                {errors.name && 'обьязательное поле'}
                <input type="text" {...register('website')}/>
                <button type='submit'>send</button>

            </form>
            
        </div>
    );
};

export default HookForm;