import React, { Component } from "react";
import Submenu from './Submenu.jsx';

class SubmenuContainer extends Component {
  state = {
    clickedOutside: false
  };

  componentDidMount() {
    document.addEventListener("mouseup", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleClickOutside);
  }

  submenuRef = React.createRef();

  handleClickOutside = (e) => {
    if (!this.submenuRef.current.contains(e.target) && !this.props.navbarRef.current.contains(e.target)) {
      this.props.closeSubmenu()
    }
  };

  render() {
    let clickedOutside = this.state.clickedOutside
    return (
      <div ref={this.submenuRef}>
        <div>
          <Submenu isOpen={this.props.isOpen}>
          </Submenu>
        </div>
      </div>
    );
  }
}

export default SubmenuContainer;