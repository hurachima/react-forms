import React from 'react';
import { useForm } from "react-hook-form";

import styles from './Contact.module.css';

const Contact = () => {
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
                <h2 className="header-title">Contact Form</h2>
            </div>

            <div className="form__content">
                <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Your Email
                        </label>
                        <input type="email" className="form__user-input" placeholder="example@email.com" 
                        {...register('email',{required:true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                        
                        />
                        {errors.email && <i>Не вірна електронна адреса</i>}
                    </div>

                    <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Subject
                        </label>
                        <select {...register('subjects',{required: true})}>
                            <option value=""></option>
                            <option value="Math">Math</option>
                            <option value="IT">IT</option>
                        </select>
                        {errors.subjects && <i>Виберіть варіант</i>}
                    </div>


                    <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Message
                        </label>
                        <textarea placeholder="Type your message here..."  {...register('message',{required:true, minLength: 10})}></textarea>
                        {errors.message && <i>Поле повинно містити від 10 символів</i>}
                    </div>

                    <div className="form__user">
                        <button type="submit" className={styles.submitBtn}>Send</button>
                        <button className={styles.forgotBtn}>Cancel</button>
                    </div>

                    <div className="form__user">Разів відправлено: {submitCount}</div>

                </form>
            </div>
           
        </div>
    )
}

export default Contact
