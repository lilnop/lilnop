import React,{Component} from 'react';
import webdev from "./img/webdev.png";
import graph from "./img/graph.png";
import prog from "./img/prog.png";

class Header extends Component{
    render(){
        return(
            <div>
                <div className="container text-center"> {/* First header container */}
                    <h1 className="text-center display-4 font-weight-bold">Hello, I'm Robert,Welcome To My Portfolio!</h1>

                    <div className="container text-center">{/* 1st Contain start */}
                        <div className="row"> {/* Row start */}
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <p className="lead font-weight-bold">Web Developer</p>
                                <img className="image-size" alt ="Web designer " src={webdev} />                
                            </div> {/* 1st col */}
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <p className="lead font-weight-bold">Graphic Designer</p>
                                <img className="image-size" alt ="Graphic designer " src={graph} />     
                            </div>{/* 2nd  */}
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <p className="lead font-weight-bold">Software Engineer</p>
                                <img className="image-size" alt ="Software " src={prog} />
                            </div>{/* 3rd start */}
                        </div> {/* Row end */}
                    </div> {/* 1st Contain end */}
                </div>{/* 1st header end */}




           {/* overall wrapper */} </div> 
        )
    }
}

export default Header;


// import React,{Component} from 'react';

// class Header extends Component{
//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }
// }

// export default Header;