import React,{Component} from 'react';


class Contact extends Component{
    render(){
        return(
            <div id="contact" className="container text-center">{/*Skills container  */}
                {/* <h3 class="mail"><a href="">Send me an email</a></h3> */}
                
                <a target="_blank" class="btn btn-outline-light btn-social text-center rounded-circle" rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-sarpong-291ba613a/">
                            <i class="fab fa-linkedin-in"></i>
                </a>
                    
                {/* <div className="row top-space">
                    <div className="col-4">
                        <a target="_blank" class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/robert-sarpong-291ba613a/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-4">
                        <a target="_blank" class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/robert-sarpong-291ba613a/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>                   
                    </div>
                    <div className="col-4">
                        <a target="_blank" class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/robert-sarpong-291ba613a/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>                    
                    </div> 
                </div>
                    
                     {/*<a target="_blank" class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/robert-sarpong-291ba613a/">
                  <i class="fa fa-fw fa-linkedin"></i>
                </a>  */}
            </div>
        )
    }
}

export default Contact;