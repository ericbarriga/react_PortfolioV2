import "./contact.scss";
import { useState } from "react"

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/phone.jpeg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <textarea name="" id="" cols="30" rows="5" placeholder="message"></textarea>
                    <button type="submit">send</button>
                    {message && <span>thank you i will reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}