import imgEd from '../../images/project-ed.png';
import imgAj from '../../images/project-aj.jpg';
import imgRe from '../../images/project-re.png';
import imgAt from '../../images/project-at.jpg';

import featureEd from '../../images/feature-ed.png';
import featureAj from '../../images/feature-aj.png';
import featureAt from '../../images/feature-at.jpg';
import featureRe from '../../images/feature-re.png';

const items = [{
  name: 'Ajay Talwar Photography',
  slug: 'ajay-talwar',
  description: 'A really beautiful portfolio site for a Delhi based astro-photographer, Mr. Ajay Talwar. The photographs and videos are breathtaking.',
  background: imgAt,
  img: featureAt,
  x: 0,
  y: 0,
  width: 600,
  height: 337.5,
  featSize: 'cover'
}, {
  name: 'AlphaJuice',
  slug: 'alphajuice',
  description: 'Hackathon prototype, the app gamifies the whole experience of learning new words. And it is suitable for all age groups. It is made on Cordova platform and utilizes Phaser as it\'s framework. Almost all of the app is written purely in Javascript. And it was developed in a span of just two days.',
  background: imgAj,
  img: featureAj,
  x: 450,
  y: 325,
  width: 400,
  height: 225,
  featSize: 'contain'
}, {
  name: 'English Duniya',
  slug: 'english-duniya',
  description: 'Learning English was never so interesting. English Duniya blends learning with fun. The products core is the recommendation engine that recognizes a student\'s level and unlocks new lessons based on it. The app is made on Cordova platform and uses Phaser for rendering the gaming elements. Rest of the app is made on Ionic framework. It is also showcased on the Ionic site.',
  background: imgEd,
  img: featureEd,
  x: 550,
  y: -50,
  width: 200,
  height: 200,
  featSize: 'cover'
}, {
  name: 'Re-Solve',
  slug: 'resolve',
  description: 'Re-Solve is an amazing puzzle game. You can answer questions in order to figure out how many people supported your answer. Unlock new levels by answering all the answers of the questions. Reveal difficult answers using hints. What you need to do is guess the most popular answers to these questions until you reach cent percent. ',
  background: imgRe,
  img: featureRe,
  x: 50,
  y: 250,
  width: 250,
  height: 250,
  featSize: 'contain'
}];
const active = null;

export default function ProjectReducer(state = { items, active }, action) {
  let project = { items, active };
  switch(action.type) {
    case 'PROJECT_ACTIVE_SET':
      project.active = action.payload;
      break;
    default:
      project.active = null;
  }
  return project;
}

export function setActiveProject(active) {
  console.log('called')
  return {
    type: 'PROJECT_ACTIVE_SET',
    payload: active
  }
}