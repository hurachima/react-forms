import React from "react";

import { useForm } from "react-hook-form";

import './SignIn.css';

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: {submitCount,errors}
    } = useForm();


    const onSubmit = (data) => {
        let v = JSON.stringify(data);
        alert(v);
    }

    return(
        <div className="form__wrapper">
            <div className="form__header">
                <h2 className="header-title">Sign In</h2>
            </div>
            <div className="form__content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__user">
                        <label htmlFor="" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form__user-input" placeholder="example" 
                        
                        {...register('userName',{required:true, minLength: 5, maxLength: 20})}
                        />
                        {errors.userName && <i>Мінімальна кількість символів від 5 до 20</i>}
                    </div>


                    <div className="form__user">
                        <label htmlFor="" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form__user-input"  placeholder="example"
                        {...register('password',{required:true, minLength: 6})}
                        />

                         {errors.password && <i>Мінімальна кількість символів 6</i>}
                        
                    </div>

                    <div className="form__user">
                        <label htmlFor="" className="label-checkbox">
                        <input type="checkbox" className="form__user-checkbox" 
                        
                        {...register('checkbox',{required:true})}
                        />
                            Remember Me
                        </label>
                    </div>
                    <div className="form__user">
                        <button type="submit" className="submit-btn">Sign In</button>
                        <button className="forgot-btn">Forgot Password?</button>
                    </div>
                    <div>
                    </div>
                    <div className="form__user">Разів відправлено: {submitCount}</div>
                </form>
            </div>
        </div>

    )
}


   







    
     



export default SignIn;