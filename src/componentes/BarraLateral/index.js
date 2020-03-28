import React from 'react';
import Contato from '../Contato';
import Formacao from '../Formacao';

function BarraLateral(props) {

    const { contatos, formacoes } = props

    return(
        <aside>
            <div className="sidebar">
            <h3>Contatos</h3>
            <div className="lista-de-contatos">
                {
                    contatos.map(contato => (
                        <Contato 
                            key={contato.id}
                            tipo={contato.tipo}
                            contato={contato.contato} />
                    ))
                }
            </div>
            </div>
            
            <div className="sidebar">
            <h3>Educação</h3>
            <div className="lista-de-formacao">
                {
                    formacoes.map(formacao => (
                        <Formacao 
                            key={formacao.id} 
                            instituicao={formacao.instituicao} 
                            curso={formacao.curso} />
                    ))
                }                     
            </div>
            </div>
        </aside>
    )
}

export default BarraLateral