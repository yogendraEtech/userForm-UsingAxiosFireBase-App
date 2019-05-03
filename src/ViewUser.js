import React, { Component } from 'react';

class ViewUser extends Component {

  render() {
    const rowss = this.props.location.state.find((m) => m.id == this.props.match.params.id)
    const rows = [rowss].map((m) => {
      return (<form className="form-group" key={m.id} >
        <div className='container user-view' >
          <h5 className=''>{m.name}</h5>
          <div className="form-group" style={{float:'right'}}>
            <img src='https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png'  height='250px' width='250px'/>
          </div>
          <div className="form-group">
            <label>Number:</label>
            <div className="">{m.number}</div>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <div className="">{m.email}</div>
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <div className="">{m.dob}</div>
          </div>
          <div className="form-group">
            <label>Profession:</label>
            <div className="">{m.profession}</div>
          </div>
          <div className="form-group">
            <label>About User:</label>
            <div className="">{m.about}</div>
          </div>
          
        </div>
      </form>
      )
    })
    return (<div>
      {rows}
    </div>
    )
  }
}

export default ViewUser;