import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import axios from ' axios;
import { getSport,createSport,deleteSport,updateSport } from './actions';
import { connect } from 'react-redux';

class App extends Component {
   state = {
     id:'',
     name:'',
     edit:''
   }

   componentDidmMount(){
     this.props.getSport();
   }
   handleDelete = (e) => {
     const {id} = e.target;
     this.props.deleteSport(id);
   }
   handleChange =(e)=>{
     var name = e.target.name,
     value = e.target.value;
     this.setState({[name] : value});
   }
   handleSubmit = (e) => {
     e.preventDefault();
     const {name} = this.state;
     this.props.createSport({
       name : name
     });
     this.setState({
       name : ''
     });
   }
   handleUpdate = (e) => {
     e.preventDefault();
     const {id,edit} = this.state;
     this.props.updateSport(id,{
       name:edit
     });
     this.setState({
       name : '',
       edit: ''
     });
   }

  render() {
    const {sport} = this.props;
    return (
      <div>
      <h1>Sports</h1>
      <ul>
{
sport.map((sports , index) => {
return (
  <li key={sports.id}>
{sports.id + '. ' + sports.name + ' '}
<button id={sports.id} onClick={this.handleDelete}>Delete</button>
</li>
)
})
}
      </ul>
      <h1>Add Sport</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text"  name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
      <button type="submmit">Add</button>
      </form>

      <h1>Edit Sport</h1>
      <form onSubmit={this.handleUpdate}>
      <input type="text" name="id" placeholder="ID" onChange={this.handleChange} value={this.state.id}/><br/>
      <input type="text" name="edit" placeholder="Name" onChange={this.handleChange} value={this.state.edit}/><br/>
      <button type="submit">Update</button>
      </form>

      </div>
    );
  }
}

const mapStatetoProps = ({ sport }) => {
  return { sport, }
}

export default connect(mapStatetoProps , { getSport, createSport,deleteSport,updateSport})(App);
