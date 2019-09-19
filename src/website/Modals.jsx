import React,{Component} from 'react';
import weather from "./img/weather-app-image.png";
import wiki from "./img/wiki.png";
import login from "./img/login.png";
import dice from "./img/dice.png";
import wp from "./img/wp.png";
import bpl from "./img/bpl.png";

class Modals extends Component{
    render(){
        return(
            <div>
                <div className="modal fade text-center" id="weather" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="weather">Weather App</h5>
                        <div className="modal-body">
                        <img className="modalImage img-fluid" src={weather} alt="weather-app" />

                        <p className="font-weight-bold"><a href="https://lilnop.github.io/weatherapp/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                        <p className="font-weight-bold"><b>Is it raining, sunny or snowing? Find out using this handy weather app.It gets results based on your location.</b></p><br />
                        <p>HTML/CSS/JAVASCRIPT/JQUERY/API <em>(04/02/2017)</em> </p>
                        </div>       
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                    </div>
                    </div>
                </div>

                {/* {<!-- MODAL 2 -->} */}
                <div className="modal fade text-center" id="wiki-viewer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="rqg">Wikipedia Previewer</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={wiki} alt="quote-generator" />
                
                            <p className="font-weight-bold"><a href="https://lilnop.github.io/wikiviewer/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>Previews Wikipedia Articles</b></p><br />
                            <p>HTML/CSS/JAVASCRIPT/JQUERY/BOOTSTRAP-4/API <em>(04/02/2017)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div>

                {/* <!-- MODAL 3 --> */}
                <div className="modal fade text-center" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="random">Login/Sign Up Project</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={login} alt="LOGIN" />
                
                            <p className="font-weight-bold"><a href="https://mytesters.000webhostapp.com/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>-Anyone can register an account,Users can sign in with their registered account,Recover password system to help you reset lost passwords,Secured hashing of user passwords in database,Built with PDO and OOP with safe mySQL injection practices.</b></p><br />
                            <p>HTML/CSS/PHP(OOP PDO)/MYSQL <em>((7/2/2018)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div>
                {/* <div className="modal fade text-center" id="random" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="random">Random Quote Generator</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src="img/rqg.png" alt="weather-app" />
                
                            <p className="font-weight-bold"><a href="https://lilnop.github.io/random_quote_generator/" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>Generates a new quote with each click. Click to tweet your favorite one!</b></p><br />
                            <p>HTML/CSS/JAVASCRIPT/JQUERY/API/BOOTSTRAP 4 <em>((7/2/2018)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div> */}

                {/* <!-- MODAL 4 --> */}
                <div className="modal fade text-center" id="dice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="random">Dice Game</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={dice} alt="dice-game" />
                
                            <p className="font-weight-bold"><a href="https://lilnop.github.io/dice-game/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>Play this fun dice game.Roll 2 same die numbers to win!</b></p><br />
                            <p>HTML/CSS/JAVASCRIPT/REACT JS <em>((17/09/2019)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div>

                {/* <!-- MODAL 5 --> */}
                <div className="modal fade text-center" id="wp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="random">GreenTree Website</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={wp} alt="website" />
                
                            <p className="font-weight-bold"><a href="http://noper1.ezyro.com/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>Simple Non-Profit Organization Wordpress Website</b></p><br />
                            <p>WORDPRESS <em>((15/07/2019)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div>

                {/* <!-- MODAL 6 --> */}
                <div className="modal fade text-center" id="bpl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <h5 className="font-weight-bold text-uppercase mt-4" id="random">Beat Player</h5>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={bpl} alt="website" />
                
                            <p className="font-weight-bold"><a href="https://lilnop.github.io/BeatPlayer/" rel="noopener noreferrer" target="_blank">VIEW</a></p>
                            <p className="font-weight-bold"><b>Have fun with the beatplayer. It makes associated sound with the correct key</b></p><br />
                            <p><em>HTML/CSS/JAVASCRIPT(01/2017)</em> </p>
                        </div>       
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close Project</button>
                        </div>
                    </div>
                </div>


            


            </div>
        )
    }
}

export default Modals;