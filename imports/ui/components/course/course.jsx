import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Course extends Component {
  render() {
    return (
      


      <div class ="content">
		<section id= "course_1">
				<h1>3D-modellering och siktanalys</h1>
				
				<nav id= "snabbfakta">
					<ul class="snabbfakta_course_1">
						<li>7,5hp</li>
						<li>Avancerad nivå</li>
						<li>Vårtermin 2018</li>
					</ul>
				</nav>
				

				<h2>OM KURSEN</h2>
				<p>Kursen behandlar 3D-visualisering av terräng baserat på olika slags höjddata, men även representation av byggda miljöer i 3D; i det senare fallet med CAD som ett viktigt inslag. För området relevanta analysmetoder, såsom olika former av siktanalys för att utvärdera effekter av befintlig och planerad bebyggelse, ingår också i kursens innehåll.</p>
		</section>

		<section id= "course_2"></section>
		<section id= "course_3"></section>
		<section id= "course_4"></section>
		<section id= "course_5"></section>
	</div>
    );
  }
}

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
