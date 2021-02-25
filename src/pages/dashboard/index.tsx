import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to='/'>Voltar ao inicio</Link>
    </>
  )
}

export default Dashboard;