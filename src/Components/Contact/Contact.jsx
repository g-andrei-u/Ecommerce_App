import React from "react";
import '../../Style/Contact.css'


export default function Contact() {
    return (
    <>
        <div className="container">
            <form action="action_page.php">
                <label for="fname">First Name</label>
                <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="spain">Spain</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                <input className="button" type="submit" value="Submit" />
            </form>
       </div>
    </>
    )
};