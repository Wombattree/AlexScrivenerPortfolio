import React, { useState } from 'react';

export default function Contact() 
{
	const [name, SetName] = useState('');
	const [email, SetEmail] = useState('');
	const [message, SetMessage] = useState('');

	const [modalActive, SetModalActive] = useState(false);
	const [modalTitle, SetModalTitle] = useState('');
	const [modalBody, SetModalBody] = useState('');

	function HandleInputChange(event) 
	{
		const { target } = event;
		const inputType = target.name;
		const inputValue = target.value;
	
		if (inputType === 'name') SetName(inputValue);
		else if (inputType === 'email') SetEmail(inputValue); 
		else SetMessage(inputValue);
	};

	function ValidateEmail(email) 
	{
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function HandleSubmit(event)
	{
		event.preventDefault();
		if (name === "") { ActivateModal(`Please enter your name`); return; }
		if (ValidateEmail(email) === false) { ActivateModal(`Please enter a valid email`); return; }
		if (message === "") { ActivateModal(`Please enter a message`); return; }
		
		ActivateModal(`Thanks for the message ${name}`, "I'll get back to you when I can!");

		SetName("");
		SetEmail("");
		SetMessage("");
	}

	function ActivateModal(messageTitle, messageBody)
	{
		SetModalTitle(messageTitle);
		if (messageBody) SetModalBody(messageBody);
		else SetModalBody("");
		SetModalActive(true);
	}

	function ClickedOutsideModal() { if (modalActive) SetModalActive(false); }

	return (
		<div>
		<section className="section">
			<div className="columns is-mobile is-centered">
				<div className="column is-three-quarters-tablet">
					<div className="container is-vcentered">
						<div className="card mt-6">
							<div className="card-content">
								<div className="content">
								<h1 className="pageTitle">Contact Me</h1>
									<div className="field">
										<label className="label">Name</label>
										<div className="control">
											<input 
												className="input" 
												type="name"
												name="name" 
												value={name}
												onChange={HandleInputChange}
											/>
										</div>
									</div>
									<div className="field">
										<label className="label">Email</label>
										<div className="control">
											<input 
												className="input" 
												type="email"
												name="email" 
												value={email}
												onChange={HandleInputChange}
											/>
										</div>
									</div>
									<div className="field">
										<div className="control">
											<textarea 
												className="textarea" 
												rows="10" 
												placeholder="What would you like to say?"
												name="message" 
												value={message}
												onChange={HandleInputChange}>
											</textarea>
										</div>
									</div>
									<div className="field">
										<div className="control">
											<button className="button is-link has-background-dark has-text-white" id="contactbutton" onClick={HandleSubmit}>Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="modal" className={`modal ${modalActive ? "is-active" : ""}`} onClick={ClickedOutsideModal}>
				<div className="modal-background"></div>
				<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title has-text-centered">{modalTitle}</p>
				</header>
				<section className="modal-card-body">
					<p>{modalBody}</p>
				</section>
				<footer className="modal-card-foot">
					<button className="button" id="modal-close" onClick={() => SetModalActive(false)}>Close</button>
				</footer>
				</div>
			</div>
		</section>
		</div>
	);
}