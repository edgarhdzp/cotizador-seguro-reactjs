import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';
import { useState } from 'react';

const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;

const ContForm = styled.div`
  background-color:#fff;
  padding:3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0
  });

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header 
      titulo="cotizador de seguros"/>  

      <ContForm>
         <Formulario 
         guardarResumen={guardarResumen}/>
        {datos ? (
          <Resumen 
          datos={datos}/>
        ): null}

        <Resultado 
        cotizacion={cotizacion}/>
      </ContForm>
    </Contenedor> 
  );
}

export default App;
