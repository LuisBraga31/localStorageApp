/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../../styles/components/form.sass';

export default function Form({userList, setUserList}) {
    
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome:'',
        idade: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    }

    const handleForm = () => {
        
        const usersArray = [...userList, formData];
        setUserList(userList);

        localStorage.setItem("users", JSON.stringify(usersArray));
    
    };

    return (
        <div className="form-content">

            <h1> Aplicação com Local Storage </h1>

            <div className="formulario">
                
                <form className="form" onSubmit={handleForm}>

                    <div className="inputs">
                        
                        <div className="campo">
                            <label> Nome </label>
                            <input name="nome" type="text" placeholder="Digite o Nome" onChange={handleChange}/>
                        </div>

                        <div className="campo">
                            <label> Sobrenome </label>
                            <input name="sobrenome" type="text" placeholder="Digite o Sobrenome" onChange={handleChange}/>
                        </div>

                        <div className="campo">
                            <label> Idade </label>
                            <input name="idade" type="number" placeholder="Digite a Idade" onChange={handleChange}/>
                        </div>

                        <div className="campo">
                            <label> Email </label>
                            <input name="email" type="email" placeholder="Digite o Email" onChange={handleChange}/>    
                        </div>

                    </div>
                        
                    <div className="button">
                        <button> Criar Usuário </button>
                    </div>

                </form>
            
            </div>

        </div>

    )
}