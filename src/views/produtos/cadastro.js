import React from 'react';


class CadastroProduto extends React.Component {


	state = {
		nome: '',
		sku:  '',
		descricao: '',
		preco: 0,
		fornecedor: ''		
		}


	onChange = (event) => {
	
		const valor = event.target.value;
		const nomeDoCampo = event.target.name;

		this.setState({ [nomeDoCampo]: valor});	
	}
	
	onSubmit = (event) =>{
		
		console.log(this.state);
	}

	limparCampos = () => {
		this.setState({
                nome: '',
                sku:  '',
                descricao: '',
                preco: 0,
                fornecedor: ''          
                }
);
	}



	render(){
	   return (
		<div className="card">
			<div className="card-header">
				Cadastro de Produtos
			</div>
			<div className="card-body">
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
                                <input type="text" value={this.state.sku} name="sku" onChange={this.onChange} className="form-control"/>
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
				  Salvar
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


export default CadastroProduto;
