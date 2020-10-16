import React from "react"
import myResume from "../../components/Resume"
import { Jumbotron } from 'reactstrap';
import './style.css';

class myReactResume extends React.Component {

  render() {
    return (
      
    <div className="main">
      <Jumbotron>
        <myResume>
      <div id="mainPage">
        
        <h1 id="h1Name">Michelle Jordan</h1> 
         <p id="contactInfo">Gastonia, NC</p>
         <p id="contactInfo">Phone Number: 704.674.6532  Email: <a href="mailto:tmsmith1150@live.com">tmsmith1150@live.com</a></p>
        
 
 <h2 id="h2s">SUMMARY</h2>
     <hr />
 
         <p id="paragraph">
             Web Developer with a background in Design, Management, and Merchandising. Strong project and people management skills, ability to take the initiative. Experience in HTML, CSS, Javascript, Bootstrap, JQuery, Node.js, ES6, GitHub, and Visual Studio.
         </p>
 
         
     <h2 id="h2s">SKILLS AND QUALIFICATIONS</h2>
     <hr />
 
     <p id="paragraph">
         <h3 id="h3s">Technologies: </h3>
         <p id="paragraph">
         Experience in HTML, CSS, Javascript, Bootstrap, JQuery, Node.js, ES6, GitHub and Visual Studio.
         </p> 
         <h3 id="h3s">Management/Design: </h3>
         <p id="paragraph">
         Strong background in Management, Space Planning, Visual Merchandising, CAD, Soft Goods Design, and Inventory Management.
         </p>
     </p>
 
 
 
 
     <h2 id="h2s">PROJECTS</h2>
     <hr />
     <p id="paragraph">
         <h3 id="h3s">Technologies: </h3>
         <p id="paragraph">
         Experience in HTML, CSS, Javascript, Bootstrap, JQuery, Node.js, ES6, GitHub and Visual Studio. 
         </p>
     </p>
 
 
     <h2 id="h2s">PROFESSIONAL EXPERIENCE</h2>
     <hr />
     <p id="paragraph">
         <h3 id="h3s">Ethan Allen Global Inc.</h3>
         <h3 id="h3s">District Visual Merchandising Manager, Retail Division</h3>
         <h3 id="h3s">January 2018 to April 2020</h3>
             <p id="paragraph">
             <li className="lines">Designed and implemented floor plan strategies for five design centers within company guidelines and prototypes.</li>
             <li className="lines">Designed floorplans for each location based on ROS and area trends to implement best representation of new introductions</li>
             <li className="lines">Planned and coordinated all installations of new product to each location. Worked closely with vendors to execute all electrical plans and carpentry updates to interiors.</li>
             <li className="lines">Managed inventory levels to ensure appropriate product mix for each location was maintained based on respective ROS while minimizing exposure to obsolete product to maintain company benchmark.</li>
             <li className="lines">Established strategic partnerships with store managers to plan merchandising goals to maximize revenues.</li>
             <li className="lines">Collaborate with corporate Store Planning and Merchandising teams on new introductions and product implementation. </li>
 
             </p>
 
 
         <h3 id="h3s">Ethan Allen Global Inc.</h3>
         <h3 id="h3s">Supervisor Customer Service, Upholstery Division</h3>
         <h3 id="h3s">April 2010 to January 2018</h3>
         <p id="paragraph">
             <li className="lines">Tracked quality trends and collaborate with VP of Upholstery Division, Plant Managers and SPM team members to determine root causes and put forth corrective actions.</li>
             <li className="lines">Developed visual presentations and lead monthly quality conference call to the retail network.</li>
             <li className="lines">Collaborated with corporate leadership and global retailers on quality trends or issues and corrective actions.</li>
             <li className="lines">Partnered with R and D on all non-standard order requests from retailers. </li>
             <li className="lines">Managed Customer Service and SR team members ensuring productivity and efficiency while providing excellence in service to global retailers.</li>
             <li className="lines"></li>
 
         </p>
 
 
         <h3 id="h3s">Ethan Allen Global Inc.</h3>
         <h3 id="h3s">Design Center Manager, Retail Division</h3>
         <h3 id="h3s">July  2004 to April 2010</h3>
         <p id="paragraph">
             <li className="lines">Directed a team of 3 Project Managers, 25 interior designers and support staff. Responsible for setting benchmarks and evaluation of performance to ensure accountability and growth of the team.</li>
             <li className="lines">Managed all daily operational processes.</li>
             <li className="lines">Consistently met and exceeded sales goals and increased overall accents business surpassing company benchmarks.</li>
             <li className="lines">Provided training to new employees and conducted weekly meetings to provide ongoing training to the entire team.</li>
             <li className="lines">Analyzed and managed monthly PL.</li>
             <li className="lines">Maintained processes and corrective action plans to ensure SOX compliance.</li>
         
         </p>
 
 
 
 
 
 
 
 
     </p>
 
 <br />
 <br />
 <br />
     <h2 id="h2s">EDUCATION</h2>
     <hr />
     <p className="school">UNCC:</p>
         <p id="degree">Full Stack Web Development Bootcamp Certificate</p>
     <p className="school">American Business and Fashion Institiute:</p>
         <p id="degree">Associates Degree in Interior Design</p>
 
 
 
 
 
     </div>
     </myResume>
      </Jumbotron>
    </div>
    
    );
  }

};

export default myReactResume;








