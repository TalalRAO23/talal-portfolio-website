import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Banner.css';

function Banner() {
    return (<>
        <div className="banner">

            <div className="intro">
                <div className="name"><h3>Hi, My name is Talal</h3></div>
                <div className="position"><h1>Web Developer</h1></div>
                <div className="socials">
                    <div className="banner-btns">
                        <a href="https://github.com/TalalRAO23" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Github</a>
                        <a href="https://linkedin.com/in/muhammad-talal-afzaal-75618440b" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
                        <a href="mailto:talalafzaal45@gmail.com"><FontAwesomeIcon icon={faEnvelope} />Gmail</a>
                    </div>
                </div>
            </div>


            <div className="description">I'm a passionate web developer focused on building modern, responsive,
                and user-friendly websites. I enjoy turning ideas into interactive digital experiences using clean
                code and creative solutions.</div>
        </div>
    </>);
}

export default Banner;