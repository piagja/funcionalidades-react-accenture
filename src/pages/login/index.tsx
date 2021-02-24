import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { Form, Content } from './style'

// import { Container } from './styles';

const Login: React.FC = () => {

  return(
    <Form>
        <input
          type="text" 
          placeholder="Nome do usuário">
        </input>

        <input
          type="password" 
          placeholder="Digite sua senha">
        </input>

        <button type="submit">Entrar</button>
    </Form>
    
    
    
    );
}

export default Login