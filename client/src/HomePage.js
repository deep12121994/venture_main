import React, {Component} from 'react';
import pic from './logo_with_name.PNG';
import pic_name from './logo_name.PNG';

export default class HomePage extends Component{
    render() {
        return(
            <div className="title"> 
                    <img src={pic} alt="mylogo" id="img1"/>
                    <img src={pic_name} alt="mylogo" id="img2"/>
            </div>
        )
    }
}