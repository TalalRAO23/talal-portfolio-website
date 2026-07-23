import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import './Skill.css';

function Skills() {
    return (
        <>
            <div className="skill-heading">
                <h1>MY SKILLS</h1>
            </div>

            <div className="skill-container">

                <div className="skill-card">
                    <div className="skill-logo">
                        <FontAwesomeIcon 
                            icon={faReact} 
                            style={{ color: "rgb(116, 192, 252)" }} 
                        />
                    </div>
                    <div className="skill-name">React.js</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <FontAwesomeIcon 
                            icon={faNodeJs} 
                            style={{ color: "rgb(170, 167, 167)" }} 
                        />
                    </div>
                    <div className="skill-name">Node.js</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <i className="devicon-express-original"></i>
                    </div>
                    <div className="skill-name">Express.js</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <FontAwesomeIcon
                            icon={faLeaf}
                            style={{ color: "rgb(14, 151, 72)" }}
                        />
                    </div>
                    <div className="skill-name">MongoDB</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <FontAwesomeIcon
                            icon={faPython}
                            style={{ color: "rgb(116, 192, 252)" }}
                        />
                    </div>
                    <div className="skill-name">Python</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <i className="devicon-cplusplus-plain"></i>
                    </div>
                    <div className="skill-name">C++</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <i className="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="skill-name">JavaScript</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <i className="devicon-html5-plain colored"></i>
                    </div>
                    <div className="skill-name">HTML</div>
                </div>


                <div className="skill-card">
                    <div className="skill-logo">
                        <i className="devicon-css3-plain colored"></i>
                    </div>
                    <div className="skill-name">CSS</div>
                </div>


            </div>
        </>
    );
}

export default Skills;