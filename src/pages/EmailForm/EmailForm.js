import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
    return (
        <div className="emailpage">
            <div className="emailForm">
                <h2 className="title">What can us do for you?</h2>
                <p className="description">We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                <div>
                    <div className="formRow">
                        <input type="text" placeholder="Your Name*" />
                        <input type="email" placeholder="Email*" />
                    </div>
                    <div className="formRow">
                        <input type="text" placeholder="Reason for Contacting*" />
                        <input type="email" placeholder="Phone" />
                    </div>
                    <div className="messageRow">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="hint">* indicates a required field</div>
                </div>
                <button className="submitButton">Submit</button>
            </div>
        </div>
    );
}

export default EmailForm;
