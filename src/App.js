import "./App.css";
import React from "react";
import Message from "./Message";
import Button from "./Button";
import Library from "./Library";

const bookList = [
  { id: 1, name: "Wings of fire", date: "12/09/1993", auther: "APJ Abdul"},
  { id: 2, name: "Half Girlfriend", date: "04/08/2011", auther: "Chetan Bhagat"},
  { id: 100, name: "Book from DB", date: new Date('12-03-2019').toDateString(), auther:"Mrinal"}
];

class App extends React.Component {
  render() { 
    return (
      <div>
        <h1> from Panda, </h1>
        <Message color="red" msg="How are you?" times={3000}/>
        <Button btnName="Click Me"/>

        <Message color="blue" msg="Miss u a lot !" times="a lot"/>
        <Button btnName="Show"/>

      <Library books={bookList}/>
      </div>
    );
  }
}

export default App;
