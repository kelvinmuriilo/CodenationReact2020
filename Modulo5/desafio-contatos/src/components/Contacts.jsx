import React,  { Component } from "react";

import Loader from 'react-loader-spinner';
import Contact from './Contact';
import './Contacts.css';

class Contacts extends Component {
	constructor(props){
		super(props);
	}

	render() {
		if(this.props.loading){
			return <div className="loader__container">
				<Loader data-testid="contacts"
					type="TailSpin"
					color="#4C84FF"
				/>
			</div>
		}

		if(this.props.contatosFiltrados.length > 0){
			return (
				<div className="container" data-testid="contacts">
					<section className="contacts">
						<article className="contact">
							<span className="contact__avatar" />
							<span className="contact__data">Nome</span>
							<span className="contact__data">Telefone</span>
							<span className="contact__data">País</span>
							<span className="contact__data">Admissão</span>
							<span className="contact__data">Empresa</span>
							<span className="contact__data">Departamento</span>
						</article>
					{
						this.props.contatosFiltrados.map((contact)=> {
							return <Contact
								key={contact.id}
								name={contact.name} 
								avatar={contact.avatar}
								phone={contact.phone}
								country={contact.country}
								admissionDate={contact.admissionDate}
								company={contact.company}
								department={contact.department}
							/>
						})
					}

					</section>
				</div>
			);
		}

		if(this.props.contatosFiltrados.length === 0){
			return (
				<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
				{
					this.props.contacts.map((contact)=> {
						return <Contact
							key={contact.id}
							name={contact.name} 
							avatar={contact.avatar}
							phone={contact.phone}
							country={contact.country}
							admissionDate={contact.admissionDate}
							company={contact.company}
							department={contact.department}
						/>
					})
				}
	
				</section>
				</div>
			);
		}
		
	}
}

export default Contacts;
