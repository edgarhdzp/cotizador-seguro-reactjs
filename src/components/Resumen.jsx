import * as React from 'react';
import {capitalizar} from '../Helper';
import styled from '@emotion/styled';
 
const ContResumen = styled.div`
    padding: 1rem;
    text-align:center;
    color:#fff;
    background-color:#00838f;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;
    return ( 
        <ContResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {capitalizar(marca)}</li>
                <li>Plan: {capitalizar(plan)}</li>
                <li>Modelo: {capitalizar(year)}</li>
            </ul>
        </ContResumen>
     );
}
 


export default Resumen;