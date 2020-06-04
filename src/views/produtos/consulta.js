import React from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card';

 class ConsultaProduto extends React.Component {

	state = {
		produtos: []
		}	

		constructor(){
			super()
			this.services = new ProdutoService();
		}

		componentDidMount(){
			const produtos = this.services.obterProdutos();
			this.setState({ produtos });
		}
		preparaEditar = (sku) => {
			
			this.props.history.push(`/cadastro-produtos/${sku}`);
			console.log(`sku para editar: ${sku}`);
		}
		
		deletar = (sku) => {
			const produtos = this.services.deletar(sku);
			this.setState({ produtos });
		}

		render() {
			
		
		return (
		<Card header="Consulta de Produtos">
                      
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
				  <td>
					<button onClick={ () => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
					<button onClick={ () => this.deletar(produto.sku)} className="btn btn-danger">Deletar</button>
				  </td>
				</tr>
				
					)
				})
			}		      
		    </tbody>
		</table>	
		</Card>
		);
	


		}


}
export default withRouter(ConsultaProduto);