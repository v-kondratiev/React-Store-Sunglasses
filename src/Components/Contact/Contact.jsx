import React from 'react';
import style from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>We are on the map</h2>
                </div>

                <div className={style.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.36595335248!2d-6.410505930349589!3d53.32441163116664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z0JTRg9Cx0LvQuNC9!5e0!3m2!1sru!2sie!4v1692194437762!5m2!1sru!2sie"
                        // width="800"
                        // height="600"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </div>
    );
};


export default Contact;