import React from 'react';
import ProdutoService from '../../app/produtoService';

export default class ConsultaProduto extends React.Component {

	state = {
		produtos: []
		}	

		constructor(){
			super()
			this.services = new ProdutoService();
		}

		componentDidMount(){
			const produtos = this.services.obterProduto();
			this.setState({ produtos });
		}

	render() {
			
		
		return (
		<div className="card">
                        <div className="card-header">
                                Consulta de Produtos
                        </div>
		<table className="table table-hover">
		   <thead>
		     <tr>
			<th>Nome</th>	
                        <th>SKU</th> 
			<th>Preço</th>
			<th>Fornecedor</th>  
		     </tr>
		   </thead>
		    <tbody>
			{
			 this.state.produtos.map( (produto, index) => {
				
				return (
				<tr key={index}>
				 <td>{produto.nome}</td>
				 <td>{produto.sku}</td>
 				 <td>{produto.preco}</td>
 			         <td>{produto.fornecedor}</td>

				</tr>)
				})
			}		      
		    </tbody>
		</table>	
		</div>
		);
	


		}


}
