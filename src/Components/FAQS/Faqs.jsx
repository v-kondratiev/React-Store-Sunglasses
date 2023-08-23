import React from 'react';
import style from './Faqs.module.scss'
import {Accordion, AccordionDetails, AccordionSummary, createTheme, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
    const theme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 15,

        },
    });
    return (
        <div className={style.container}>
            <div className={style.Faqs}>
                <div >
                    <div className={style. info}>
                        <h3 className={style.title}>QUESTIONS?</h3>
                        <p>Let us know at <b>sunglasses@gmail.com</b> and be sure to include your full name and order number if applicable, so we can be as helpful as possible.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>CUSTOMER SERVICE HOURS:</h3>
                        <p>Monday - Friday, 8am to 7pm. Please allow up to 24hrs for a response.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>HOW LONG WILL MY ORDER TAKE?</h3>
                        <p>Standard (free): 10 - 14 business days.</p>
                        <p>Express ($20): 5 - 8 business days.</p>
                        <p>Due to COVID-19, there may be delays with domestic and international shipping.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>WHERE IS MY ORDER?</h3>
                        <p>If you are unable to track your order, or it is taking longer than anticipated. Contact us at <b>sunglasses@gmail.com</b> and we will sort it for you.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>CAN I TRACK MY ORDER?</h3>
                        <p>Yes, following an order confirmation, you should receive a second email with your tracking number once your order has been shipped. If you do not receive a confirmation email, please contact thashadeshackk@gmail.com</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>WHAT IS YOUR RETURN POLICY?</h3>
                        <p></p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}></h3>
                        <p></p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}></h3>
                        <p>We’ll happily refund your full-priced order within 30 days of delivery, if they have not been worn. They must be in resalable condition with original case and tags.

                            Please contact us for more info.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>CAN I CHANGE OR CANCEL MY ORDER?</h3>
                        <p></p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}></h3>
                        <p>We start working on your order as soon as we get it, so we are unable to make any changes or modifications to an order after it has been placed and confirmed still feel free to contact us at thashadeshackk@gmail.com and we will try our best to assist you.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>WHAT SHOULD I DO IF I RECEIVE AN ERROR MESSAGE WHEN TRYING TO PLACE AN ORDER? </h3>
                        <p>Confirm you’ve properly filled out all details including your name, email, shipping address and phone number. If you are still having issues, please contact thashadeshackk@gmail.com</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>WHAT IF I HAVEN’T RECEIVED A CONFIRMATION EMAIL?</h3>
                        <p>As soon as your order is placed, you should receive an email confirmation. If you checked out with PayPal, be sure to check the email account associated with your account. Also be sure to check your spam folder. For further questions, please contact thashadeshackk@gmail.com</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}>S IT SAFE TO SHOP ON THASHADESHACK.COM </h3>
                        <p>Absolutely! All of your payment information is kept safe and secure and you can check out with either PayPal, Afterpay or your credit card.</p>
                    </div>

                    <div className={style. info}>
                        <h3 className={style.title}></h3>
                        <p></p>
                    </div>

                    {/*<div className={style. info}>*/}
                    {/*    <h3 className={style.title}>WHAT PAYMENT METHODS DO YOU ACCEPT?</h3>*/}
                    {/*    <p>We accept Visa, Mastercard, American Express, PayPal and Afterpay. </p>*/}
                    {/*</div>*/}

                    {/*<div className={style. info}>*/}
                    {/*    <h3 className={style.title}>DO YOU HAVE A PHYSICAL STORE LOCATION I CAN VISIT?</h3>*/}
                    {/*    <p>At this time, we are online only. However, we are focusing heavily on opening up a store in 2023! Please contact thashadeshackk@gmail.com to find a upcoming location near you.</p>*/}
                    {/*</div>*/}

                    {/*<div className={style. info}>*/}
                    {/*    <h3 className={style.title}>WHAT IF I RECEIVE A DAMAGED ITEM?</h3>*/}
                    {/*    <p>Please contact our customer care department immediately at thashadeshackk@gmail.com</p>*/}
                    {/*</div>*/}

                    {/*<div className={style. info}>*/}
                    {/*    <h3 className={style.title}>CAN I PLACE AN ORDER WITHOUT REGISTERING?</h3>*/}
                    {/*    <p>Yes, of course! But we think it will make your life easier if you create an account so you can track your orders more easily.</p>*/}
                    {/*</div>*/}

                    {/*<div className={style. info}>*/}
                    {/*    <h3 className={style.title}>I AM AN INTERNATIONAL CUSTOMER (OUTSIDE AUSTRALIA). DO I HAVE TO PAY CUSTOMS & TAXES?</h3>*/}
                    {/*    <p>Please be aware that any items shipped outside of Australia may be subject to import duties and/ or taxes applicable to your country/ or the country you're shipping to. You will be responsible for these additional charges that incur for customs clearance when your package reaches your country. Unfortunately, we do not have any control over these charges and cannot predict what they may be. Customs policies vary from country to country; we recommend that you contact your local customs office for further information.</p>*/}
                    {/*</div>*/}
                </div>

            </div>

            <div className={style.accordion}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography theme={theme} fontWeight="bold">I AM AN INTERNATIONAL CUSTOMER (OUTSIDE AUSTRALIA). DO I HAVE TO PAY CUSTOMS & TAXES?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Please be aware that any items shipped outside of Australia may be subject to import duties and/ or taxes applicable to your country/ or the country you're shipping to. You will be responsible for these additional charges that incur for customs clearance when your package reaches your country. Unfortunately, we do not have any control over these charges and cannot predict what they may be. Customs policies vary from country to country; we recommend that you contact your local customs office for further information.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography theme={theme} fontWeight="bold">CAN I PLACE AN ORDER WITHOUT REGISTERING?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, of course! But we think it will make your life easier if you create an account so you can track your orders more easily.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography theme={theme} fontWeight="bold">WHAT IF I RECEIVE A DAMAGED ITEM?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Please contact our customer care department immediately at thashadeshackk@gmail.com
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography theme={theme} fontWeight="bold">DO YOU HAVE A PHYSICAL STORE LOCATION I CAN VISIT?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            At this time, we are online only. However, we are focusing heavily on opening up a store in 2023! Please contact thashadeshackk@gmail.com to find a upcoming location near you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography theme={theme} fontWeight="bold">WHAT PAYMENT METHODS DO YOU ACCEPT?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We accept Visa, Mastercard, American Express, PayPal and Afterpay.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>




    );
};

export default Faqs;