import React,{Component} from 'react';
import weather from "./img/weather-app-image.png";
import wiki from "./img/wiki.png";
import login from "./img/login.png";
import dice from "./img/dice.png";
import wp from "./img/wp.png";
import bpl from "./img/bpl.png";
// import weather from "./img/weather-app-image.png";

// import weather from "./img/weather-app-image.png";

class PortContainer extends Component{
    render(){
        return(
            <div id="portfolio" className="container containerColor">{/*Portfolio color container  */}
                <div className="container">{/*Portfo container  */}
                <h2 className="text-center font-weight-bold">PORTFOLIO</h2>
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#weather" className="portImage img-fluid" src={weather} alt="weather app" />
                        </div>
                
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#wiki-viewer" className="portImage img-fluid"  src={wiki} alt="wiki app" />
                        </div>
                        
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#login"  className="portImage img-fluid" src={login} alt="login" />
                        </div>

                        {/* <!-- PORTFOLIO ROW 4-6 --> */}
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#dice" className="portImage img-fluid"  src={dice} alt="dice game" />
                        </div>
                        
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#wp"  className="portImage img-fluid" src={wp} alt="wordpress" />
                        </div>

                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#bpl" className="portImage img-fluid" src={bpl} alt="beatplayer" />
                        </div>


                        {/* <!-- PORTFOLIO ROW 7-9 --> */}
                        {/* <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#survey" className="portImage img-fluid" src={weather} alt="form-image" />
                        </div>
                        
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#pomodoro" className="portImage img-fluid" className="portImage img-fluid" src={weather} alt="pomodoro-app-image" />
                        </div>
                        
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <img data-toggle="modal" data-target="#beatplayer" className="portImage img-fluid" className="portImage img-fluid" src={weather} alt="beatplayer-app-image" />
                        </div> */}


                        {/* <!-- PORTFOLIO ROW 2 --> */}
                            

                        {/* <!-- PORTFOLIO ROW 2 --> */}


                        {/* <!-- PORTFOLIO ROW 2 --> */}


                    </div>{/*end Portfo row  */}
                </div>{/*end Portfo container  */}

                {/*end Portfolio color container  */}
            </div>
        )
    }
}

export default PortContainer;