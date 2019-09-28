import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import { fetchUsers, searchUsers } from "./services/api";
import "./styles/card.css";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const data = await fetchUsers();

    this.setState({ users: data });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div className="cardList">
          {users.map(user => {
            return (
              <Card
                key={user.id}
                avatar={user.avatar_url}
                username={user.login}
                link={user.html_url}
                fullName={user.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
