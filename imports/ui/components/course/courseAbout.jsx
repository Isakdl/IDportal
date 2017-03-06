import React, { Component, PropTypes } from 'react';
export default class CourseAbout extends Component {
  render() {
    return (
      <div className ="SectionWrapper">
         <h2>OM KURSEN</h2>
			   <p>{this.props.info}</p>
      </div>

    );
  }
}

CourseAbout.propTypes = {
  info: PropTypes.string.isRequired,
 
};
// <p>Kursen behandlar 3D-visualisering av terräng baserat på olika slags höjddata,
//        men även representation av byggda miljöer i 3D; i det senare fallet med CAD som ett
//        viktigt inslag. För området relevanta analysmetoder, såsom olika former av siktanalys 
//        för att utvärdera effekter av befintlig och planerad bebyggelse, ingår också i kursens innehåll.</p>
