import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "../Assets/css/Contact.css";
import facebook from "../Assets/images/facebook.png"
import instagram from "../Assets/images/instagram.png"
import pinterest from "../Assets/images/pinterest.png"


const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [clicked ,setClicked]=useState(null);

const onChangeFNameHandler = (e)=>{
    setFirstname(e.target.value);
}
const onChangeLNameHandler = (e)=>{
  setLastname(e.target.value);
}
const onChangeEmailHandler = (e)=>{
  setEmail(e.target.value);
}
const onChangeSubjectHandler = (e)=>{
  setSubject(e.target.value);
}
const onChangeMessageContentHandler = (e)=>{
  setMessageContent(e.target.value);
}

const sendEmail = (firstname, lastname, email, subject, message)=>{
    //console.log(firstname, lastname, email, subject, message);
    emailjs.send("service_rpn3mfh","template_19lelub",{
        from_name: subject,
        user_name: firstname + " " + lastname,
        user_email: email,
        message: message,
    }, `NRnezUi36J9PIjB0L`)
    .then(()=>{
      setClicked(true);
    })
    .catch(()=>{setClicked(false)});
}

//console.log(firstname, lastname, email, subject,messageContent);
const onSubmitHandler = (e)=>{
  e.preventDefault();
  sendEmail(firstname, lastname, email, subject, messageContent);
}


  return (
    <div id='contactMe' className='contactSkills'>
    <div className='contact-info'>
        <div className="main-text">
          <h2 className="heading">Contact Me</h2>
          <p>Get in touch and let us know how we can help. Have a question but aren’t sure who to contact? Get in touch and a member of <br /> our team will reach out to you.</p>
        </div>
        <form action="#">
        <div className="input-box">
             <input onChange={onChangeFNameHandler} name='firstname' type="text" placeholder="First Name" />
            <input onChange={onChangeLNameHandler} name='lastname' type="text" placeholder="Last Name" />
        </div>
            <input onChange={onChangeEmailHandler} name="email" type="email" placeholder="Email" />
            <input onChange={onChangeSubjectHandler} name="subject" type="text" placeholder="Subject" />
            <textarea onChange={onChangeMessageContentHandler} name="messageConetnt" id="" cols="30" rows="10">
            </textarea>
            {clicked == true && <p style={{color: "green"}}>Email sent</p>}
            
            {clicked == false && <p style={{color: 'red'}}>Error! try again</p>}

            {clicked == null && <p></p>}
            
        <div className="formBtn">
            <button onClick={onSubmitHandler} type="submit" className="btn">Send Message</button>
        </div>
        </form>
    </div>

        <div className='sidebar'>
                <div className='abouts1'>
                    <h3>ADDRESS:</h3>
                    <p>
                        <p className='paras'>55 Gallaxy Enque, 2568 steet, 23568 NY</p>   
                                <br />
                                <strong>Phone : </strong>+1 (440) 568 4568
                                <br />
                                <strong>Email:</strong> sales@yousite.com
                    </p>
                </div>
                            <br />
                            <hr/>
                <div className='abouts1'>
                    <h3>OPENING HOURS</h3>
                        <p> Mon - Sat : 9am - 11pm </p>
                        <p>Sunday: 11am - 5pm</p>   
                </div>
                            <br />
                            <hr/>

                <div>
                    <p>STAY CONNECTED</p>
                    <div>
                        <img src={facebook} style={{width: "30px", paddingRight: "20px"}}/>
                        <img src={instagram } style={{width: "30px", paddingRight: "20px"}} />
                        <img src={pinterest} style={{width: "30px", paddingRight: "20px"}} />
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Contact;
