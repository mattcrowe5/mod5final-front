import React, { Component } from "react";
import { Button, Menu, Image, Icon } from "semantic-ui-react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MainMenu extends Component {
  handleHome = () => {
    this.props.history.push("/home");
  };

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <Menu
        size="tiny"
        style={{
          paddingBottom: "0px",
          marginBottom: "0px",
          backgroundColor: "rgb(11, 186, 49)"
        }}
      >
        <Menu.Item>
          <Image
            src="https://www.spreadshirt.com/image-server/v1/mp/designs/12380109,width=178,height=178/rock-hand-symbol.png"
            size="tiny"
          />
        </Menu.Item>
        <Menu.Item>Welcome, {this.props.currentUser}!</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item onClick={this.handleHome}>
            <Icon name="home" size="large" />
            Home
          </Menu.Item>
          <Menu.Item>
            <Button color="black" onClick={this.handleLogout}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.display_name
  };
}

export default withRouter(connect(mapStateToProps, actions)(MainMenu));
