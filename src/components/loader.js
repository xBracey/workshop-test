import React from "react";

class Loader extends React.Component {
  render() {
    const { isLoading } = this.props;

    return isLoading ? <div className="loader"></div> : null;
  }
}

export default Loader;
