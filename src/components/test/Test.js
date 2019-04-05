import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    //Most popular use of a life cycle method if fetching data within a component
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  //     componentWillMount() {
  //       //Runs before DidMount
  //       console.log("component will mount");
  //     }
  //     componentDidUpdate() {
  //       //will only run when a component is updated and state is changed
  //       console.log("component did update");
  //     }
  //     componentWillUpdate() {
  //       //runs before did update
  //       console.log("component will update");
  //     }
  //     componentWillReceiveProps(nextProps, nextState) {
  //       //When your component receives new properties this will run.. usually used with Redux
  //       console.log("componentWillReceiveProp");
  //     }

  //     static getDerivedStateFromProps(nextProps, prevState) {
  //       //need to return either state or null
  //       return {
  //         test: "something"
  //       };
  //     }

  //     getSnapshotBeforeUpdate(prevProps, prevState) {
  //       //Cant use set state with this.. you actually have to return the state.
  //       console.log("getSnapshotBeforeUpdate");
  //     }

  //   WillReceiveProps Will/Did update are in the process of being
  //   depricated because react is becoming more asynchronous

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
