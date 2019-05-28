import React, { Component } from 'react'
import './forms.css'
export default class ControlledForm extends Component {
    constructor(props){
        super(props)
        this.nameRef = React.createRef()
        this.descRef = React.createRef()
        this.companyRef = React.createRef()
        this.cityRef = React.createRef()
    }
    _onSubmit = (ev)=>{
        console.log(this.nameRef.value,this.descRef.value,this.companyRef.value, this.cityRef.value)
        ev.preventDefault()
    }
    render() {
        return (
            <div className="form-container">
                <h1>Form with UnControlled Component</h1>
                <form onSubmit={this._onSubmit}>
                    <label htmlFor="personname">Person Name : </label>
                    <input
                        type="text"
                        placeholder="Your name ..."
                        name="personname"
                        ref = {(c)=>this.nameRef = c}
                    />
                    <label htmlFor="designation">Designation : </label>
                    <input
                        type="text"
                        placeholder="Designation ..."
                        name="designation"
                        ref = {(c)=>this.descRef = c}
                    />
                    <label htmlFor="company">Company : </label>
                    <input
                        type="text"
                        placeholder="Company ..."
                        name="company"
                        ref = {(c)=>this.companyRef = c}
                    />
                    <select name="city" ref = {(c)=>this.cityRef = c}>
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