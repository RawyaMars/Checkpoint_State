import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class App extends Component {
  state={
    person:
    {name: 'Danny McLoan',
    profession: 'Senior Journalist',
    followers:54,
    articles:4,
    url: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
  }, shows:true,
  date: new Date()
     }
   handleShows = () =>{
    this.setState({ ...this.state,shows:!this.state.shows});
  console.log(this.state.shows)}
  //increment=()=>this.setState({counter:this.state.counter+1})
  handleDate=()=>{
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    setInterval(this.handleDate,1000); 
   }
  render() {
    return (
      <div className='App'>
      <Button onClick={()=> this.handleShows()}> show</Button>
      
      {this.state.shows && <>
        <label>{this.state.date.toLocaleTimeString()}</label>
        <Profile list={this.state.person}/>
      </>
      }
    </div>
  
    )
  }
}

