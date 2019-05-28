import React, { Component } from 'react'
import './forms.css'
export default class ControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personname: 'John',
            designation: 'Software Engineer',
            company: 'Oracle',
            city: 'delhi'
        }
    }

    _onChange = (ev) => {
        // if (ev.target.name === 'name') {
        //     this.setState({ name: ev.target.value })
        // } else if (ev.target.name === 'designation') {
        //     this.setState({ designation: ev.target.value })
        // } else if (ev.target.name === 'company') {
        //     this.setState({ company: ev.target.value })
        // }
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }
    _onSubmit = (ev)=>{
        console.log(this.state)
        ev.preventDefault()
    }
    render() {
        return (
            <div className="form-container">
                <h1>Form with Controlled Component</h1>
                <form onSubmit={this._onSubmit}>
                    <label htmlFor="personname">Person Name : </label>
                    <input
                        type="text"
                        placeholder="Your name ..."
                        name="personname"
                        onChange={this._onChange}
                        value={this.state.personname}
                    />
                    <label htmlFor="designation">Designation : </label>
                    <input
                        type="text"
                        placeholder="Designation ..."
                        name="designation"
                        onChange={this._onChange}
                        value={this.state.designation}
                    />
                    <label htmlFor="company">Company : </label>
                    <input
                        type="text"
                        placeholder="Company ..."
                        name="company"
                        onChange={this._onChange}
                        value={this.state.company}
                    />
                    <select name="city" onChange={this._onChange} value={this.state.city}>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="amaravathi">Amaravathi</option>
                    </select>
                    <input type="submit" value="Add Details" className="btn" />
                </form>
            </div>
        )
    }
}