import React, { Fragment, Component } from 'react';
import { UserInput } from './UserInput';

class App extends Component {
  state = { userTyped: 'Sakti', counter: 0 };
  inputElRef = React.createRef();
  howManyTimes = ['Y'];

  componentDidMount() {
    console.log("Inside Component Did Mount");
    console.log(this.inputElRef);
    this.inputElRef.current.focus();
  }

  onuserTyped = (userValue) => {
    console.log(userValue.target.value);
    this.howManyTimes[0] = userValue.target.value;
    console.log(this.howManyTimes);
    this.setState( (prevState, props) => {
      return { counter: prevState.counter + 1};
    }); 
  };

  render () { 
    return (
      <Fragment>
        What you have typed? {this.state.userTyped}
       
          <UserInput onuserTyped={this.onuserTyped} counter={this.state.counter.toString()} />
          <input type="text" ref={this.inputElRef} name="Parent Text" placeholder="Type Something here..." />
        Counter : {this.state.counter}
       </Fragment>
    );
  } 
}

export default App;
