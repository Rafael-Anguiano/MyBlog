import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div>
                <h1>CONTACT</h1>
                <small>Submit the form below to get in touch with me</small>
            </div>

            <form action="https://getform.io/f/866767bf-bcd1-4d58-98a8-610922df907f" method='POST'>
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        required={true}
                        placeholder="Enter your name" 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        required={true}
                        placeholder="Enter your email" 
                    />
                </div>
                <textarea 
                    name="message" 
                    placeholder="Enter your message"
                    rows="10"
                ></textarea>

                <button>Let's Talk</button>
            </form>
        </section>
      )
}

export default Contact