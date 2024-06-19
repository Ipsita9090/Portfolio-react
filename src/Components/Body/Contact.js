import React from 'react'

function Contact() {
  return (
    <div id="contact">
            <div>
            <h1 >Say Hello!</h1>
            <p >Mail @ ipsitabarua00@gmail.com | Call @ 8457885677</p>
            </div>
            <form action="" >
                <label for="name">Name</label>
                <textarea name="name" id="name" cols="25" rows="2"></textarea>
                <br/>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="25" rows="10"></textarea>
                <br /><div className='btncontainer'><button type='submit' className='submit'>Submit</button>
                </div>
            </form>
            <br/>
            <div class="socials">
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-discord"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
            </div>


        </div>
  )
}

export default Contact
