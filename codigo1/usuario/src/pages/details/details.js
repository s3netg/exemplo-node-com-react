import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from "react-router-dom";

export default class Usuario extends Component {
    state = {
        usuario: {
            nome: "",
            matricula: 0,
            endereco: {
                cidade: "",
                estado: ""
            }
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/usuarios/${id}`);

        this.setState({ usuario: response.data });
    }

    render() {
        const { usuario } = this.state;

        if (usuario.ativo) {
            usuario.ativo = "Usuário Ativo";
          } else {
            usuario.ativo = "Usuário Inativo";
          }
        return (
  
            <div class="container mt-4">
           
             
             <div class="card-body m-5">
                <h1 class="card-title">{usuario.nome}</h1>
            </div>
            <div>
             <ul class="list-unstyled mb-4">
                 <li>{usuario.matricula}</li>
                <li> {usuario.ativo} </li>
                <li> {usuario.endereco.cidade} </li>
                <li> {usuario.endereco.estado} </li>
              </ul>
               
              </div>
              <Link to = {`/`} >  <button type="button" class="btn btn-secondary btn-lg">Voltar</button></Link>
              <Link to = {`/EditarUsuario/${usuario._id}`} >  <button type="button" class="btn btn-primary btn-lg">Editar</button></Link>
              <Link to = {`/DeletarUsuario/${usuario._id}`} >  <button type="button" class="btn btn-danger btn-lg">Deletar</button></Link>
             
            </div>
              
        );
    }
}