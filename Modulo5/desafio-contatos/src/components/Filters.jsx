import React from 'react';

class Filters extends React.Component {
	constructor(props){
		super(props);
		this.state = {selected: ''}
	}

	handleClick(event){
		this.setState({selected: event.target.id})
		this.props.handleClick(event);
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input 
						type="text" 
						className="filters__search__input" 
						placeholder="Pesquisar" 
						onChange={event => this.props.handleChangeInput(event.target.value)}
					/>

					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					<button 
						id="name" 
						className={`filters__item ${this.state.selected === 'name'? `is-selected` : ''}`} 
						onClick={event => this.handleClick(event)}
					>
					Nome <i className="fas fa-sort-down" />
					</button>

					<button 
						id="pais" 
						className={`filters__item ${this.state.selected === 'pais'? `is-selected` : ''}`} 
						onClick={event => this.handleClick(event)}
					>
					País <i className="fas fa-sort-down" />
					</button>

					<button 
						id="empresa" 
						className={`filters__item ${this.state.selected === 'empresa'? `is-selected` : ''}`}
						onClick={event => this.handleClick(event)}
					>
					Empresa <i className="fas fa-sort-down" />
					</button>

					<button 
						id="departamento" 
						className={`filters__item ${this.state.selected === 'departamento'? `is-selected` : ''}`} 
						onClick={event => this.handleClick(event)}
					>
					Departamento <i className="fas fa-sort-down" />
					</button>

					<button 
						id="data" 
						className={`filters__item ${this.state.selected === 'data'? `is-selected` : ''}`}
						onClick={event => this.handleClick(event)}
					>
					Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
