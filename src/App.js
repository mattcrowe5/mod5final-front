import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/LoginPage";
import AuthorizationPage from "./components/login/Authorization";
import TopTracksList from "./components/tracks/topTracksList";
import TopArtists from "./components/artists/topArtists";
import Shows from "./components/shows/shows";
import SavedShows from "./components/shows/SavedShows";
// import Base from "./components/base/Base";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={AuthorizationPage} />
          <Route path="/toptracks" component={TopTracksList} />
          <Route path="/topartists" component={TopArtists} />
          <Route path="/shows" component={Shows} />
          <Route path="/saved" component={SavedShows} />
        </Switch>
      </div>
    );
  }
}

export default App;
