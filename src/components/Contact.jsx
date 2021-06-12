import React from 'react';

import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.form__wrapper}>
                <div className={styles.form__header}>
                <h2 className="header-title">Contact Form</h2>
            </div>

            <div className="form__content">
                <form> 
                <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Your Email
                        </label>
                        <input type="email" className="form__user-input" placeholder="example@email.com" 
                        
                        />
                    </div>

                    <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Subject
                        </label>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>


                    <div className={styles.form__user}>
                    <label htmlFor="" className="form-label">
                            Message
                        </label>
                        <textarea name=""></textarea>
                    </div>

                    <div className="form__user">
                        <button type="submit" className={styles.submitBtn}>Send</button>
                        <button className={styles.forgotBtn}>Cancel</button>
                    </div>

                </form>
            </div>
           
        </div>
    )
}

export default Contact
