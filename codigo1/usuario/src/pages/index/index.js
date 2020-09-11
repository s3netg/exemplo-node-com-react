import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';
import './index.css';

export default class Usuarios extends Component {
    //nao armazeno a variavel de forma local
    //uso uma variavel estado para isso
    //cria um objeto e facilita a forma de manipular ele e atualizar
    state = {
        usuarios: [],
        usuariosInfo: {},
        page: 1,
    };

    //mostrar info automaticamente qdo iniciar a app, usa esse metodo
    componentDidMount() {
        this.loadUsuarios();
    }

    loadUsuarios = async (page = 1) => {
        //const response = await api.get('/usuarios');

        const response = await api.get(`/usuarios?page=${page}`);

        const { docs, ...usuariosInfo } = response.data;

        //console.log(response.data.docs);
        //this.setState ({ usuarios: response.data.docs})

        this.setState({ usuarios: docs, usuariosInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadUsuarios(pageNumber);
    }

    nextPage = () => {
        const { page, usuariosInfo } = this.state;
        if (page === usuariosInfo.pages) return;

        const pageNumber = page + 1;
        this.loadUsuarios(pageNumber);
    }

    render() {
        const { usuarios, usuariosInfo, page } = this.state;
        return (

            <div className="usuario-list">
                <div class="card-deck m-5 text-center">
                {this.state.usuarios.map(usuario => (
                  

                    <div  key={usuario._id}>
                    
                    
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">{usuario.nome}</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{usuario.matricula}</h1>
                                 <Link to = {`/usuarios/${usuario._id}`} >  <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button></Link>
                            </div>
                        </div>

                   </div>
                   




                ))}
                </div>

                <div className="actions">
                    <button class="btn ml-5 btn-primary" disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button class="btn  btn-primary" disabled={page === usuariosInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}