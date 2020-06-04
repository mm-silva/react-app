import React from 'react';
import  ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom';

   const  estadoInicial = {
                nome: '',
                sku:  '',
                descricao: '',
                preco: 0,
                fornecedor: '',
		success: false,
		errors: [],
		atualizando: false      
                }



class CadastroProduto extends React.Component {


	state  = estadoInicial;

	constructor(){
	    super()
	this.service = new ProdutoService();
	
	}
	onChange = (event) => {
	
		const valor = event.target.value;
		const nomeDoCampo = event.target.name;

		this.setState({ [nomeDoCampo]: valor});	
	}
	
	onSubmit = (event) => {
	
		
		const produto = {
                nome: this.state.nome,
                sku:   this.state.sku,
                descricao:  this.state.descricao,
                preco:  this.state.preco,
                fornecedor:  this.state.fornecedor,
                }

		try{
			
        	this.service.salvar(produto);
                this.setState({success: true});
                this.limparCampos();

		}catch(erro){
			const  errors = erro.errors;
		
			this.setState({errors:errors})
		 console.log(this.state);
	
	}
	
	}

	limparCampos = () => {
		this.setState({
                nome: '',
                sku:  '',
                descricao: '',
                preco: 0,
                fornecedor: '',
		          
                }
);
	}

	componentDidMount(){
		const sku = this.props.match.params.sku;
		if(sku){
			const resultado = this.service.obterProdutos().filter(produto => produto.sku == sku)
			
			if(resultado.length > 0){ 
				const produtoEncontrado = resultado[0];
				this.setState({ ...produtoEncontrado, atualizando: true});
			}
			
		}

	}


	render(){
	   return (
		<div className="card">
			<div className="card-header">
				{this.state.atualizando ? "Atualizando Produto" : "Cadastro de Produtos "}
				
			</div>




			<div className="card-body">
			{this.state.success &&
                        (<div class="alert alert-dismissible alert-success">
                               <button type="button" className="close" data-dismiss="alert">&times;</button>
  					<strong>Bom trabalho!!!</strong> <a href="#" className="alert-link">Seu produto foi cadastrado</a>
					   </div>) 

                                } 

		{this.state.errors.length > 0 &&
				this.state.errors.map(msg => {
					return  (
				<div class="alert alert-dismissible alert-danger">
  					<button type="button" class="close" data-dismiss="alert">&times;</button>
  					<strong>Erro!</strong> <a href="#" class="alert-link">{msg}</a>
				</div>)
				}) 
			}

 
			
			 <div className="row">

		            <div className="col-md-6"> 
			    <div className="form-group"> 
			   	<div className="label">
				Nome: *
				</div> 
                                <input type="text" value={this.state.nome} name="nome" onChange={this.onChange} className="form-control"/>
			     </div>		
			     </div>

			  <div className="col-md-6"> 
                            <div className="form-group"> 
                                <div className="label">
                                SKU: *
                                </div> 
                                <input type="text" value={this.state.sku} disabled={this.state.atualizando ? true : false} name="sku" onChange={this.onChange} className="form-control"/>
                             </div>             
                             </div>

			   </div> 
			   <div className="row">
		   	      <div className="col-md-12">
			      	<div className="form-group">
				  <div className="label">
				    Descrição: *
				  </div>
				   <textarea className="form-control" value={this.state.descricao} name="descricao" onChange={this.onChange} id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
			      </div>
			   </div>

			<div className="row">
                            <div className="col-md-6"> 
                            <div className="form-group"> 
                                <div className="label">
                                Fornecedor: *
                                </div> 
                                <input type="text" value={this.state.fornecedor} name="fornecedor" onChange={this.onChange} className="form-control"/>
                             </div>             
                             </div>

                          <div className="col-md-6"> 
                            <div className="form-group"> 
                                <div className="label">
                                Preço: *
                                </div> 
                                <input type="text" value={this.state.preco}  name="preco" onChange={this.onChange}className="form-control"/>
                             </div>             
                             </div>

                           </div> 
				
			  <div className="row">
			  	<div className="col-md-1">
				  <button onClick={this.onSubmit} className="btn btn-success">
				{this.state.atualizando ? "Atualizar" : " Salvar"}
  				  </button>
				</div>
			   <div className="col-md-1">
                                  <button className="btn btn-primary" onClick={this.limparCampos}>
                                  Limpar
                                  </button>
                                </div>
  			   </div>
			</div>
		</div>
         	);
	}


}


export default withRouter(CadastroProduto);
