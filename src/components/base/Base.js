import React from "react";
import { headers } from "../../authorization/headers";
import { connect } from "react-redux";

class Base extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.currentUser.display_name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(Base);
