import React, { Component } from 'react';
import Experiencia from "../Experiencia";

class Experiencias extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            experiencias: props.experiencias,
            mostraSomenteAtual: false
        }
    }

    mostrarSomenteAtual = () => {
        this.setState({
            mostraSomenteAtual: true
        })
    }

    mostrarTodas = () => {
        this.setState({
            mostraSomenteAtual: false
        })
    }

    render() {

        const experiencias = this.state.experiencias

        return (
            <div className="experience">
               <h2>Experiência Profissional</h2>
                    
               {
                    experiencias.map(experiencia => (
                            
                        this.state.mostraSomenteAtual ?
                            experiencia.atual && 
                            <Experiencia
                                key={experiencia.id} 
                                cargo={experiencia.cargo}
                                periodo={experiencia.periodo}
                                empresa={experiencia.empresa}
                                local={experiencia.local}
                                conteudo={experiencia.conteudo}
                                atual={experiencia.atual} />
                        :
                            <Experiencia
                                key={experiencia.id} 
                                cargo={experiencia.cargo}
                                periodo={experiencia.periodo}
                                empresa={experiencia.empresa}
                                local={experiencia.local}
                                conteudo={experiencia.conteudo}
                                atual={experiencia.atual} />
                                                   
                    ))
                }
                
                {
                    this.state.mostraSomenteAtual ? 
                        <button onClick={this.mostrarTodas}>Mostrar todas</button> : 
                        <button onClick={this.mostrarSomenteAtual}>Mostrar atual</button>
                }
               
               
            </div>
        );
    }
}

export default Experiencias;