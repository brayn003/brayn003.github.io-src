import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

class CursorDisplay extends Component{
  constructor() {
    super();
    this.state = {
      up: "key key-white",
      left: "key key-white",
      down: "key key-white",
      right: "key key-white",
    }
  }

  componentDidMount() {
    this.highlightArrows(this.props.menu.active);
  }

  componentWillReceiveProps(nextProps) {
    this.highlightArrows(nextProps.menu.active);
  }

  getArrows(activeMenu) {
    switch(activeMenu) {
      case 'projects':
      case 'home':
      case 'about':
      case 'contact':
      default:
        return ['up', 'down'];
    }
  }

  highlightArrows(activeMenu) {
    let activeArrows = this.getArrows(activeMenu);
    let allArrows = Object.keys(this.state);
    let classes = allArrows.reduce((agg, arrow) => {
      if(activeArrows.indexOf(arrow) != -1) {
        agg[arrow] = "key key-white active";
      } else {
        agg[arrow] = "key key-white";
      }
      return agg;
    }, {});
    this.setState( classes );
  }

  render() {
    return(
      <div className="cursor-display xs-hidden">
        <a data-tip data-for='keyTooltip' >
          <div className="key-row">
            <div className="key"></div>
            <div className={ this.state.up }><span className="typcn typcn-arrow-up" /></div>
            <div className="key"></div>
          </div>
          <div className="key-row">
            <div className={ this.state.left }><span className="typcn typcn-arrow-left" /></div>
            <div className={ this.state.down }><span className="typcn typcn-arrow-down" /></div>
            <div className={ this.state.right }><span className="typcn typcn-arrow-right" /></div>
          </div>
        </a>
        <ReactTooltip id='keyTooltip' place="top" type="light" effect="float">
          <p class="key-tooltip">The arrows indicate that<br />you can use keyboard keys<br />to navigate.</p>
        </ReactTooltip> 
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(CursorDisplay);