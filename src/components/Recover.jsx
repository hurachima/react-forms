
import React from 'react';
import { useForm } from "react-hook-form";

import styles from'./Recover.module.css';
const Recover = () => {
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
                <h2 className={styles.headerTitle}>recover password</h2>
            </div>

            <div className="form__content">

            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__user">
                        <label htmlFor="" className="form-label">
                            your email
                        </label>
                        <input type="email" className="form__user-input" placeholder="example@email.com" 
                        {...register('email',{required:true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                        
                        />
                        {errors.email && <i>Не вірна електронна адреса</i>}
                       
                    </div>
                    <div className="form__user">
                        <button type="submit" className={styles.submitBtn}>Send</button>
                        <button className={styles.forgotBtn}>Sign up</button>
                    </div>
                    <div className="form__user">Разів відправлено: {submitCount}</div>
                    </form>
            </div>
            
        </div>
    )
}

export default Recover
