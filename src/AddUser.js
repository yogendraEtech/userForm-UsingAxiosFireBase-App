
import React from 'react'
import './AddUser.scss'
import uuid from 'uuid';
import { BrowserRouter as Router, Link } from 'react-router-dom';



class CreatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      item: [],
      posts:[]
    }
    this.name = null;
    this.number = null;
    this.email = null;
    this.dob = null;
    this.profession = null;
    this.about = null;
    this.i=1;
  }

  fillName = (event) => {
    this.name = (event.target.value)
  }
  fillNumber = (event) => {
    this.number = (event.target.value)
  }
  fillEmail = (event) => {
    this.email = (event.target.value)
  }
  fillDob = (event) => {
    this.dob = (event.target.value)
  }
  fillProfession = (event) => {
    this.profession = (event.target.value)
  }
  fillAbout = (event) => {
    this.about = (event.target.value)
  }
  submitForm = () => {
    this.setState({
      item: 
        {
          id: uuid(),
          name: this.name,
          number: this.number,
          email: this.email,
          dob: this.dob,
          profession: this.profession,
          about: this.about,
          img:'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png'
        }
    })
  }
  render() {
    return (
      <div>
        <form className="form-group">
          <h3>Profile Info</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" required className="form-control" id="name" ref={this.ref} onChange={this.fillName} />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input type="number" required maxLength='10' className="form-control" id="number" ref={this.ref} onChange={this.fillNumber} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" required className="form-control" id="email" ref={this.ref} onChange={this.fillEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">DOB:</label>
            <input type="date" required className="form-control" id="dob" ref={this.ref} onChange={this.fillDob} />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession:</label>
            <input type="text" required className="form-control" id="profession" ref={this.ref} onChange={this.fillProfession} />
          </div>
          <div className="form-group">
            <label htmlFor="about">Write something about urself:</label>
            <input type="text" className="form-control" id="about" ref={this.ref} onChange={this.fillAbout} />
          </div>
          <Link to="/"><input className='btn btn-lg btn-success' type='submit' value='Create' onClick={(e) => { this.props.handleSubmit(this.state.item) }} onMouseDown={this.submitForm} /></Link>
        </form>
      </div>
    )
  }
}

export default CreatePoll;