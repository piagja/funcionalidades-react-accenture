import React, { useState, FormEvent } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { Form } from './style'
import { toast } from 'react-toastify'

// import { Container } from './styles';

const Login: React.FC = () => {
  const history = useHistory()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function loginSys (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const postData = {
      usuario: login,
      senha: password
    }

    try {
      api.post(`login`, postData).then(response => {
        console.log(response.data)
        localStorage.setItem('@tokenApp', response.data.token)
        history.push('/dashboard')
      })
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!')
    }

  }

  return(
    <>
      <Form onSubmit={loginSys}>
        <input
          value={login}
          onChange={ e => setLogin(e.target.value)}
          type="text" 
          placeholder="Nome do usuário">
        </input>

        <input
          value={password}
          onChange={ e => setPassword(e.target.value)}
          type="password" 
          placeholder="Digite sua senha">
        </input>

        <button type="submit">Entrar</button>
      </Form>
      <Link to='/' type="submit">Voltar</Link>
    </>
    )
}

export default Login