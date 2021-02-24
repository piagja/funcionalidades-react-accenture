import React, {useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Card, Content } from './style'

const Home: React.FC = () => {

  const [ cpf, setCpf] = useState('')
  const [ name, setName ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  return(
    <Content>
        <Card>
            <h1>Gama Bank é um projeto de nossos alunos.</h1>
            <h4>Já tem conta?</h4>
        </Card>

        <Form>
            <input 
                type="text" 
                placeholder="CPF">
            </input>

            <input  
                type="text" 
                placeholder="nome completo" >
            </input>

            <input
                type="text" 
                placeholder="Nome do usuário">
            </input>

            <input
                type="text" 
                placeholder="Digite sua senha">
            </input>

            <input
                type="text" 
                placeholder="Confirme sua senha">
            </input>
            <button type="submit">Cadastrar</button>
        </Form>
    </Content>
  );
}

export default Home;