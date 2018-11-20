import React, { Component } from "react";

export default class ContactsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts.splice(0, 5),
      sortName: false,
      sortPopularity: false
    };
  }

  getRand(array) {
    return Math.floor(Math.random() * array.length);
  }
  addContact() {
    this.setState({
      contacts: [
        ...this.state.contacts,
        ...this.props.contacts.splice(this.getRand(this.props.contacts), 1)
      ]
    });
  }
  sortPopularity() {
    this.setState({
      sortPopularity: !this.state.sortPopularity,
      contacts: this.state.contacts.sort((a, b) => {
        if (this.state.sortPopularity) {
          return a.popularity < b.popularity;
        } else {
          return a.popularity > b.popularity;
        }
      })
    });
  }
  sortName() {
    this.setState({
      sortName: !this.state.sortName,
      contacts: this.state.contacts.sort((a, b) => {
        if (this.state.sortName) {
          return a.name > b.name;
        } else {
          return a.name < b.name;
        }
      })
    });
  }

  handleDelete(index) {
    let newContacts = this.state.contacts.slice();
    newContacts.splice(index, 1);
    this.setState({
      contacts: newContacts
    });
  }
  render() {
    return (
      <div className="contactsTable">
        <div className="actionButtons">
          <button onClick={() => this.addContact()}>Add random contact</button>
          <button onClick={() => this.sortName()}>Sort by Name</button>
          <button onClick={() => this.sortPopularity()}>
            Sort by Popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el, i) => (
              <div className="trDiv">
                <tr key={i}>
                  <td>
                    <img
                      src={el.pictureUrl}
                      alt={el.name}
                      style={{ height: 100 }}
                    />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                  <td>
                    <button onClick={() => this.handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
