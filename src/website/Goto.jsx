import React,{Component} from 'react';
import contact from "./img/contact.png";
import port from "./img/port.png";
import about from "./img/about.png";

class Goto extends Component{
    render(){
        return(
            <div className="right">
                <a href="#contact"><img className="right-img" src={contact} alt="contact"/></a> <br />
                <a href="#portfolio"><img className="right-img" src={port} alt="portfolio"/></a> <br />
                <a href="#about"><img className="right-img" src={about} alt="about"/></a>
            </div>
        )
    }
}

export default Goto;