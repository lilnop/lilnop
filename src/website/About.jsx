import React,{Component} from 'react';
import profile from "./img/profile.jpg";

class About extends Component{
    render(){
        return(
            <div id="about" class="container containerSpace">
                <div class="row">
                    <div class="col-8">
                        <p class="text-center font-weight-bold">Hello! I'm Robert, a self taught Full Stack Web Developer from Ghana. I first started using a computer at age 6, and since then, have fallen in love with the technology world. Then the Internet came along and changed everything. Now I am certain that I want to be part of the community of professionals that make Internet a really beautiful and interesting place.</p>
                    </div>
                    <div class="col-4">
                        <img class="rounded-circle myImg img-fluid text-center" src={profile} alt="Me" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;