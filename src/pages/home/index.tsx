import React, {useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Card, Content } from './style'
import api from '../../services/api'

const Home: React.FC = () => {
  const history = useHistory()

  const [ cpf, setCpf] = useState('')
  const [ name, setName ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  function createAccount (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const postData = {
      cpf,
      nome: name,
      login: userName,
      senha: password
    }

    if (password !== confirmPassword) {
      alert('Confirme a senha!')
      return
    }

    try {
      api.post(`usuarios`, postData).then(
        response => {
          if (response.status === 200) {
            history.push('/login')
          } else {
            alert('algo deu errado, tente novamente')
          }
        }
      )      
    } catch (error) {
      console.log('Deu erro cara!', error)
    }
  }

  return(
    <Content>
        <Card>
            <h1>Gama Bank é um projeto de nossos alunos.</h1>
            <h4>Já tem conta?</h4>
        </Card>

        <Form onSubmit={createAccount}>
            <input
              value={ cpf }
              type="text" 
              onChange={ e => { setCpf(e.target.value) } }
              placeholder="  CPF">
            </input>

            <input
              value={ name }
              type="text" 
              onChange={ e => { setName(e.target.value) } }
              placeholder="  Nome completo" >
            </input>

            <input
              value={ userName }
              type="text" 
              onChange={ e => { setUserName(e.target.value) } }
              placeholder="  Nome do usuário">
            </input>

            <input
              value={ password }
              type="password" 
              onChange={ e => { setPassword(e.target.value) } }
              placeholder="  Digite sua senha">
            </input>

            <input
              value={ confirmPassword }
              type="password" 
              onChange={ e => { setConfirmPassword(e.target.value) } }
              placeholder="  Confirme sua senha">
            </input>
            <button type="submit">Cadastrar</button>
            <Link to='/login'>Já tem login?</Link>
        </Form>
    </Content>
  );
}

export default Home;