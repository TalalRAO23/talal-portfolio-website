import './Contact.css';
function Contact() {
    return (<>
        <div className="section-divider"></div>
        

        <div className="contact-container">

            <div className="contact-wrapper">

                <div className="contact-head"><h2>Contact Me</h2></div>
                <div className="big-head">Let's work together</div>
                <div className="text"><p>I'm always open to discussing new opportunities, freelance projects, or creative ideas.
                    Feel free to reach out—I'd love to hear from you.</p></div>
            </div>

            <div className="contact-form">
                <form>

                    <div className="form-name">
                        <input type="text" name="" placeholder='Name' />
                    </div>

                    <div className="email">
                        <input type="email" name="" placeholder='Email' />
                    </div>

                    <div className="message">
                        <textarea name="" placeholder='Message'></textarea>
                    </div>

                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>

        <div className="section-divider-2"></div>

        <footer><p>Copyright © 2026 Talal Afzaal. All rights reserved.</p></footer>
    </>);
}

export default Contact;