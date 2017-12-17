import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveProject } from '../../reducers/Project';

class ProjectModal extends Component{
  constructor(props) {
    super();
    console.log(props)
    this.initializeProject(props.project.active);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.initializeProject(nextProps.project.active);
  }
  initializeProject(project) {
    if (project == null) {
      this.project = {
        img: ''
      }
    } else {
      this.project = project;
    }
  }
  onClickClose() {
    this.props.setActiveProject(null);
  }
  render() {
    return (
      <div style={{ visibility: this.props.project.active == null ? 'hidden' : 'visible' }} className="project-modal">
        <div className="feature-img" style={{ backgroundImage: 'url(\'' + this.project.img + '\')', backgroundSize: this.project.featSize }} />
        <div className="desc">
          <p className="desc-title">
           {this.project.name}
          </p>
          {this.project.description}
        </div> 
        <button onClick={() => { this.onClickClose(); }} className="close-btn"><span className="typcn typcn-times"></span></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);