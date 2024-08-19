import React from 'react'

function Contact() {
  return (
    <div id="contact-us" className="contact-us">  
    <div className="container">
        <div className="section-title">
            <h2>CONTACT US</h2>
            <div className="divider"> </div>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
        </div>
        <div className="contact-content">
            <div className="contact-info">
                <div className="contact">
                    <div className="phone">
                        <p>Mobile Number</p>
                        <p>+9011122233344</p>
                    </div>
                    <div className="mail">
                        <p>Email Address</p>
                        <p>info@gmail.com</p>
                    </div>
                </div>
                <h3>Make An Appoinment</h3>
                <form >
                    <div className="form-group row">
                        <div className="col-sm-15">
                            <input type="name" className="form-control" id="inputName" placeHolder="Your Name" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-15">
                            <input type="email" className="form-control" id="inputEmail" placeHolder="Your Email" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-15">
                            <input type="message" className="form-control" id="inputMessage" placeHolder="Your Message" autoComplete="off"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="contact-image">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18663.142978208445!2d29.119384785333036!3d36.54720770242893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c040a6a8a0efd9%3A0xdba05aed33b8aefd!2zw5Zsw7xkZW5peiBQbGFqxLE!5e0!3m2!1str!2str!4v1722625935919!5m2!1str!2str"
  width="100%"
  height="360"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
        </div>
    </div>
</div>
  )
}

export default Contact