import "./contact.css"

function Contact() {
    return (
        <>
            <div id='contact-hero'>
                <h1 id='contact-hero-head'>Contact</h1>
            </div>

            <div id="contact-form-main">
                <div id="form-div">
                    <h1 id="form-head">Send a message to us!</h1>
                    <br />

                    <input id="form-input" type="text" placeholder="Name" />
                    <input id="form-input" type="text" placeholder="Email" />
                    <input id="form-input" type="text" placeholder="Subject" />
                    <input id="form-input" type="text" placeholder="Message" />
                    <br />

                    <button id="form-btn" type="submit">Send Message</button>
                </div>
            </div>
        </>
    )
}

export default Contact