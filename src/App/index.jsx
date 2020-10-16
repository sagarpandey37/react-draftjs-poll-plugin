import React, { Component } from 'react';
import './index.scss';
import PollEditor from '../Components/Editor';
 
class App extends Component {
  render() {
    return (
        <div className="container">
              <PollEditor />
        </div>
    );
  }
}
 
export default App;
