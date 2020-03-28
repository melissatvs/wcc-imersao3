import React from 'react'

function Formacao(props) {
    const { instituicao, curso } = props
    
    return (
        <li>
            <h4>{instituicao}</h4>
            <p>{curso}</p>
        </li>
    )
    
}

export default Formacao