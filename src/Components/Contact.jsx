import React, { useState } from 'react';
import ContactCss from '../Css/Contact.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleChange = (e) => {
        const { key, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            company: '',
            email: '',
            mobile: '',
            message: '',
        });
    };

    const [eye1, seteye1] = useState(faEyeSlash);
    const [eye2, seteye2] = useState(faEyeSlash);
    const [eye3, seteye3] = useState(faEyeSlash);
    const [num1, setnum1] = useState("***********");
    const [num2, setnum2] = useState("***********");
    const [Add, setAdd] = useState("******************************");

    const changeViewNum1 =()=>{
        if(eye1 === faEyeSlash){
            seteye1(faEye);
            setnum1(7982234003);
        }
        else{
            seteye1(faEyeSlash);
            setnum1("***********");

        }
    }
    const changeViewNum2 =()=>{
        if(eye2 === faEyeSlash){
            seteye2(faEye);
            setnum2(9311312250);

        }
        else{
            seteye2(faEyeSlash);
            setnum2("***********");
        }
    }
    const changeViewAddress =()=>{
        if(eye3 === faEyeSlash){
            seteye3(faEye);
            setAdd("1294/A, Dabua Colony, Faridabad, Haryana")
        }
        else{
            seteye3(faEyeSlash);
            setAdd("******************************");
        }
    }
  

    
    return (
            <main className={ContactCss.container}>
                <div className={ContactCss.contactInfo}>
                    <div className={ContactCss.infoSection}>
                        <h2>Mobile:</h2>
                        <p>Nouman Khan<br />{num1} <FontAwesomeIcon icon={eye1} onClick={changeViewNum1} className={ContactCss.icon}/></p>
                        <p>Other<br />{num2} <FontAwesomeIcon icon={eye2}  onClick={changeViewNum2} className={ContactCss.icon}/></p>
                    </div>
                    <div className={ContactCss.infoSection}>
                        <h2>Email:</h2>
                        <p>General Query:<br />noumankhan16859@gmail.com</p>
                        <p>Official Email:<br />noumanyt2003@gmail.com</p>
                    </div>
                    <div className={ContactCss.infoSection}>
                        <h2>Address:</h2>
                        <p>{Add} <FontAwesomeIcon icon={eye3}  onClick={changeViewAddress} className={ContactCss.icon}/><br />Pin-121001</p>
                    </div>
                </div>
                <div className={ContactCss.contactForm}>
                    <h2>Message Me / Report an Issue</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="message">Message: (Max: 500 words)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </main>
    );
};

export default Contact;
