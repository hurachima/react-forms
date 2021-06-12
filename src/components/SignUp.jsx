import React from 'react';
import { useForm } from "react-hook-form";
import styles from './SignUp.module.css';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: {submitCount,errors}
    } = useForm();

    const onSubmit = (data) => {
        let v = JSON.stringify(data);
        alert(v);
    }

    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__header}>
                <h2 className="header-title">Sign Up</h2>
            </div>
            <div className="form__content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__user">
                    <label htmlFor="" className="form-label">
                            Full Name
                        </label>
                        <input type="text" className="form__user-input" placeholder="Alex Siminitzky" 
                         {...register('fullName',{required:true, minLength: 8, maxLength: 30})}
                        />
                        {errors.fullName && <i>Невірне ім'я</i>}
                    </div>

                    <div className="form__user">
                    <label htmlFor="" className="form-label">
                            Your Email
                        </label>
                        <input type="email" className="form__user-input" placeholder="example@email.com" 
                        
                        {...register('email',{required:true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                        />

                        {errors.email && <i>Не вірна електронна адреса</i>}
                    </div>

                    <div className="form__user">
                    <label htmlFor="" className="form-label">
                            password
                        </label>
                        <input type="password" className="form__user-input" placeholder="example" 
                        {...register('password',{required:true, minLength: 6})}
                        />

                        {errors.password && <i>Мінімальна кількість символів 6</i>}
                    </div>

                    <div className="form__user">
                    <label htmlFor="" className="form-label">
                            your gender
                        </label>
                        <input type="radio" name="radio" className={styles.radioBtn2} value="Mail"
                        
                        {...register('gender',{required:true})}
                        />
                        <span>Mail</span>
                      
                        <input type="radio"  name="radio" className={styles.radioBtn} value="Female"
                           {...register('gender',{required:true})}
                        />
                        <span>Female</span>

                        {errors.gender && <i>Виберіть варіант</i>}
                    </div>

                    <div className="form__user">
                    <label htmlFor="" className="form-label">
                            bio
                        </label>
                        <textarea name="" placeholder="Something about you..." {...register('bio',{required:true, minLength: 10})}></textarea>
                        {errors.bio && <i>Поле повинно містити від 10 символів</i>}

                    </div>

                    <div className="form__user">
                        <button type="submit" className={styles.submitBtn}>Sign Up</button>
                        <button className={styles.forgotBtn}>Cancel</button>
                    </div>

                    <div className="form__user">Разів відправлено: {submitCount}</div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
