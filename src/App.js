import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AddUser from './AddUser';
import UserList from './UserList';
import ViewUser from './ViewUser';
import Menu from './Menu';
import './App.scss';
import axios from 'axios';

class PollingSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [],
      posts: []
    }
  }

  handleSubmit = (data) => {
    this.state.item.push(data);
    const abc = this.state.item;
    axios.put('https://react-axios-learning.firebaseio.com/data.json', { abc })
  }
  // componentDidMount() {
  
  // }
  render() {
    axios
    .get('https://react-axios-learning.firebaseio.com/data.json')
    .then(res => {
      this.setState({
        posts: res.data.abc
      })
    })
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/addUser" render={() => <AddUser handleSubmit={(data) => this.handleSubmit(data)} />} />
            <Route exact path="/viewUser/:id" component={ViewUser} />
            <Route exact path="/userList" render={() => <UserList post={this.state.posts} />} />
            <Route render={() => 'Page Not Found'} />
          </Switch>
          <div>
            <Link to='/' className='back'>Back</Link>
          </div>
        </div>
      </Router>
    )
  }
}

export default PollingSystem;
