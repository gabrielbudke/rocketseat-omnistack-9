import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        // Previne o comportamento padrão do button ao realizar o submit
        event.preventDefault();

        // Consome a api retornando o e-mail
        const response = await api.post('/sessions', { email });

        // Realiza o destruction pegando o id do usuário/session no objeto retornado no response
        const { _id } = response.data;

        // Armazena o id do usuário/session no storage do navegador
        localStorage.setItem('user', _id);

        history.push('/dashboard');


    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e econtre <strong>talentos</strong> para sua equipe
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}