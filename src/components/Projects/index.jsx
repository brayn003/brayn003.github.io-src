import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { setActiveProject } from '../../reducers/Project';
import ProjectModal from '../ProjectModal';

import snapSoundPath from '../../sounds/snap.mp3';


class Projects extends Component{
  constructor(props) {
    super();
    console.log(props);
  }

  onClickProject(project) {
    this.props.setActiveProject(project);
  }

  renderProjectTiles() {
    return this.props.project.items.map(project => (
      <div
        key={project.slug} 
        className="project-tile"
        onClick={() => { this.onClickProject(project); }}  
        style={{ 
          backgroundImage: 'url(\'' + project.background + '\')',
          left: project.x,
          top: project.y,
          width: project.width,
          height: project.height 
        }}
      >
        <div className="project-tile-overlay">{project.name}</div>
      </div>
    ))
  }

  render() {
    return(
      <div className="view-projects">
        <div className="project-container">
          <div className="project-tile-container">
            { this.renderProjectTiles() }
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveProject: setActiveProject
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);