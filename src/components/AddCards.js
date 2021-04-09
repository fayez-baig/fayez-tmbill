import React, { Component } from "react";
import "./AddCard.css";

class AddCard extends Component {
  
  constructor(){
    super();
    this.descriptionInput = React.createRef();
  }
  
  state = {
    taskName: "",
    description: "",
  };

  updateChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.name + " " + this.state.description);
  };

  handleChange2 = (e) => {
    if(e.which === 13){
      this.handleChange();
      this.descriptionInput.current.blur();
    }
    
  }

  handleChange = (e) => {
   

    var list = this.props.list;
    var obj = {};
    obj.id = list.length < 1 ? 0 : list.length === 1 ? 1 : list.length;
    console.log(obj.id);
    obj.taskName = this.state.taskName;
    obj.description = this.state.description;
    obj.taskDone = false;
    this.props.addCard(obj);
    obj = {};
    this.setState({ taskName: "", description: "" });
  };

  handleKeyPress= (event)=> {
  //  return event.key === 'enter' && console.log("enter oress");
  
  if( event.which === 13)
  this.descriptionInput.current.focus();
  }

  render() {
    return (
      <div className="AddCard">
        <div>
          <div className="AddCardContainer">
            <label htmlFor="name">Task Name</label>
            <input
              name="taskName"
              type="text"
              onChange={this.updateChange}
              placeholder="Task Name"
              id="name"
              value={this.state.taskName}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>

          <div className="AddCardContainer">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={this.updateChange}
              placeholder="description"
              value={this.state.description}
              ref={this.descriptionInput}
              onKeyPress={this.handleChange2}
            ></textarea>
          </div>

          <div>
            <button className="btn btnAdd" onClick={this.handleChange}>Add Card</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCard;
