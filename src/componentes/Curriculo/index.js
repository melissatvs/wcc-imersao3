import React, { Component } from 'react';
import Perfil from '../Perfil';
import BarraLateral from '../BarraLateral';
import Experiencias from "../Experiencias";

class Curriculo extends Component {
   state = {
      informacoes: [
         {
            nome: 'Melissa de Santana',
            ocupacao: 'Analista Programadora',
            resumo: '29 anos, casada',
            perfilProfissional: '+10 anos trabalhando com desenvolvimento Delphi, não aguento mais! #MeAjudaSairDessa',
            contatos: [
               {
                  id: 1,
                  tipo: 'Celular',
                  contato: '19 99230-7787'
               },
               {
                  id: 2,
                  tipo: 'E-mail',
                  contato: 'melissa.tv@hotmail.com'
               },
               {
                  id: 3,
                  tipo: 'GitHub',
                  contato: 'https://github.com/melissatvs'
               }
            ],
            educacao: [
               {
                  id: 1,
                  instituicao: 'Faculdade Anhanguera de Campinas – Unid. 3',
                  curso: 'Graduação - Ciência da Computação'
               },
               {
                  id: 2,
                  instituicao: 'Etec Hortolândia',
                  curso: 'Técnico em Informática (ênfase em Programação)'
               },
               {
                  id: 3,
                  instituicao: 'Codenation',
                  curso: 'Aceleração de C# - Backend (.Net Core, API REST, Git, Swagger, DDD, Entity Framework)'
               }
            ],
            experiencia: [
               {
                  id: 1,
                  cargo: 'Analista Programadora',
                  periodo: 'Março 2011',
                  empresa: 'Vector Gestão Hospitalar',
                  local: 'Campinas/SP',
                  conteudo: 'Desenvolvimento de novas funcionalidades e alterações em sistemas legados na área hospitalar em Delphi 7. Criação e manutenção de procedures, functions, packages, views, triggers em Banco de Dados Oracle. Monitoria aos demais programadores. Análise Técnica / Teste Técnico. Manutenção em bugs e ajustes no sistema em Delphi 7. Responsável pela padronização e organização do código-fonte em Delphi 7.',
                  atual: true
               },
               {
                  id: 2,
                  cargo: 'Analista Programadora Jr.',
                  periodo: 'Maio 2009 - Março 2011',
                  empresa: 'MSys Consultoria',
                  local: 'Valinhos/SP',
                  conteudo: 'Desenvolvimento e manutenção de procedures, functions, views e triggers em Banco de dados SQL Server. Criação de telas e manutenções em telas já existentes em Delphi 7. Participação no desenvolvimento de integração do ERP SGM com a NFe. Análises junto a possíveis clientes para desenvolvimento de sistema sob medida e/ou ajustes nos sistemas existentes. Acompanhamento de implantação de sistema. Suporte ao usuário.',
                  atual: false
               }
            ]
         }
      ]
   }
   
   render() {
      const info = this.state.informacoes[0]
      const { contatos, educacao: formacoes, experiencia: experiencias } = info

      return (
         <main>
            <Perfil 
               nome={info.nome} 
               ocupacao={info.ocupacao} 
               resumo={info.resumo} 
               perfilProfissional={info.perfilProfissional} />

            <BarraLateral 
               contatos={contatos}
               formacoes={formacoes} />
            
            <Experiencias experiencias={experiencias}/>
         </main>
         )
         
      }
   }
   
export default Curriculo