import React from 'react';

function Contato(props) {
    const { tipo, contato } = props

    return (
        <li>
            <div className="item-contato">
                <h4>{tipo}</h4>
                <p>{contato}</p>
            </div>
        </li>
    )
}

export default Contato