import React, { Component } from "react";
import AddCard from "../components/AddCards";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

class App extends Component {
  state = {
    list: [
      { id: 0, taskName: "getup", description: "sfadh asfd", taskDone: false },
      { id: 1, taskName: "brush", description: "sfadh asfd", taskDone: false },
      {
        id: 2,
        taskName: "drink water",
        description: "sfadh asfd",
        taskDone: true,
      },
    ],
    searchfield: "",
  };

  updateID = (list) => {
    // const list1 = [...this.state.list];
    list.map((data) => {
      return (data.id = list.findIndex(
        (list) => list.taskName === data.taskName
      ));
    });
    this.setState({ list: list });
    console.log(this.state.list1);
  };

  deleteCard = (id) => {
    console.log(id);
    const list = this.state.list.filter((list) => list.id !== id);
    // this.setState({list});
    this.updateID(list);
    console.log(list);
  };

  addCard = (list) => {
    const objCopy = [...this.state.list];
    objCopy.push(list);
    console.log(objCopy);
    list.taskName.length > 0 && this.setState({ list: objCopy });
  };

  cardStrike = (id) => {
    const list = [...this.state.list];

    list[id].taskDone = list[id].taskDone ? false : true;

    this.setState({ list });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { list, searchfield } = this.state;
    const filterList = list.filter((list) => {
      return list.taskName.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1 align="center">Todo List</h1>
        <AddCard addCard={this.addCard} list={this.state.list} />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {" "}
          <CardList
            deleteCard={this.deleteCard}
            cardStrike={this.cardStrike}
            list={filterList}
          />
        </Scroll>
      </div>
    );
  }
}
export default App;
