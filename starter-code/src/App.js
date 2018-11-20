import React, { Component } from "react";
import "./App.css";

import contacts from "./contacts.json";
import ContactsComponent from "./ContactsComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsComponent contacts={contacts} />
      </div>
    );
  }
}

export default App;
