import React,{Component} from 'react';
import html from "./img/HTML.png";
import css from "./img/css.png";
import js from "./img/js.png";
import php from "./img/php.png";
import react from "./img/react.png";
import sql from "./img/mysql.png";


class Skills extends Component{
    render(){
        return(
            <div className="container text-center container-white">{/*Skills container  */}
                <h2 className="text-center font-weight-bold">SKILLS</h2>
                <div className="row top-space">
                    <div className="col-4">
                        <img className="skills-img" src={html} alt="HTML" />
                    </div>
                    <div className="col-4">
                        <img className="skills-img" src={css} alt="CSS" />
                    </div>
                    <div className="col-4">
                        <img className="skills-img" src={js} alt="JS" />
                    </div>
                </div>

                <div className="row top-space">{/*  SECOND ROW OF SKILLS*/}
                    <div className="col-4">
                        <img className="skills-img" src={php} alt="PHP" />
                    </div>
                    <div className="col-4">
                        <img className="skills-img" src={react} alt="REACT" />
                    </div>
                    <div className="col-4">
                        <img className="skills-img" src={sql} alt="mySQL" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;