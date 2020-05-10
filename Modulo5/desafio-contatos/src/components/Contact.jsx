import React from 'react';

import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  formatarData(value){
    let data = new Date(value);
    let dataString = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`.split('/');
    return dataString.map(item => item < 10? `0${item}` : item).join("/").toString();
   
  }

  render() {
    return (
      <article className="contact" data-testid="contact">
        <img className="contact__avatar" src={this.props.avatar} alt="" />
        <span className="contact__data">{this.props.name}</span>
        <span className="contact__data">{this.props.phone}</span>
        <span className="contact__data">{this.props.country}</span>
        <span className="contact__data">{this.formatarData(this.props.admissionDate)}</span>
        <span className="contact__data">{this.props.company}</span>
        <span className="contact__data">{this.props.department}</span>

      </article>
    );
  }
}

export default Contact;
