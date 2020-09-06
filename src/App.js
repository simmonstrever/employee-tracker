import React, { Component } from 'react';
import './App.css';

import TableData from './components/TableData';
import Data from './DataSample.json';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: [],
      editUser: {user: null, display: false}
    }

  }

  
  componentWillMount() {
    
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('userData')
    this.setState({
      userData: JSON.parse(data)
    });
  }
  

  

  render() {

    return (
      <div>
        {/* <Header /> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TableData 
                users={this.state.userData}
                editUser={this.editUser}
                deleteUser={this.deleteUser} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;