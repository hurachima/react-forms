import { Component } from "react";

import './SignIn.css';

class SignIn extends Component{
   constructor(props){
       super(props)

       this.state = {value:''};

       
   }







    render(){
        return(
            <div className="form__wrapper">
                <div className="form__header">
                    <h2 className="header-title">Sign In</h2>
                </div>
                <div className="form__content">
                    <form>
                        <div className="form__user">
                            <label htmlFor="" className="form-label">
                                Username
                            </label>
                            <input type="text" className="form__user-input" placeholder="example" />
                        </div>


                        <div className="form__user">
                            <label htmlFor="" className="form-label">
                                Password
                            </label>
                            <input type="text" className="form__user-input"  placeholder="example" />
                        </div>


                        <div className="form__user">
                            <label htmlFor="" className="label-checkbox">
                            <input type="checkbox" className="form__user-checkbox" />
                                Remember Me
                            </label>
                        </div>
                        <div className="form__user">
                            <button type="submit" className="submit-btn">Sign In</button>
                            <button className="forgot-btn">Forgot Password?</button>
                        </div>
                    </form>
                
                </div>

           
            </div>
        )
    }
}


export default SignIn;