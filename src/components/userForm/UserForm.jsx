import React from 'react';
import './UserForm.css'
class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state={email: '', genero: ''}
        this.emailInput = React.createRef();
    }

    componentDidMount(){
        console.log(this.emailInput.current);
        this.emailInput.current.focus();
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSelectChange = event => {
        this.setState({[event.target.name]:event.target.selectedOptions[0].value})
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
        <form className='userForm' onSubmit={this.handleSubmit}>
            <input type="email" name='email' ref={this.emailInput}
                value={this.state.email} onChange={this.handleChange} 
                placeholder="introduce tu email"/>
                <select name="genero" value={this.state.genero} onChange={this.handleSelectChange}>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
            <button type='submit'>Enviar</button>

        </form>
        )
    }
}

export default UserForm;