import React, {useState} from 'react';
import {useNavigate} from 'react-router';

export default function Create() {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		age: '',
		currentCollege: '',
	});
	const navigate = useNavigate();

	// THESE METHODS WILL UPDATE THE STATE PROPERTIES
	function updateForm(value) {
		return setForm((prev) => {
			return {...prev, ...value};
		});
	}

	// THIS FUNCTION WILL HANDLE THE SUBMISSION
	async function onSubmit(e) {
		e.preventDefault();

		// WHEN A POST REQUEST IS SENT TO THE CREATE URL, WE'LL ADD A NEW RECORD TO THE DATABASE
		const newPerson = {...form};

		await fetch(`https://m4pnjsapi.onrender.com/students`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPerson),
		}).catch((error) => {
			window.alert(error);
			return;
		});
		setForm({
			firstName: '',
			lastName: '',
			email: '',
			age: '',
			currentCollege: '',
		});
		navigate('/');
	}

	// THIS FOLLOWING SECTION WILL DISPLAY THE FORM THAT TAKES THE INPUT FROM THE USER
	return (
		<div>
			<h3>Create New Contact</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						value={form.firstName}
						onChange={(e) =>
							updateForm({firstName: e.target.value})
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						value={form.lastName}
						onChange={(e) => updateForm({lastName: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="form-control"
						id="email"
						value={form.email}
						onChange={(e) => updateForm({email: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="text"
						className="form-control"
						id="age"
						value={form.age}
						onChange={(e) => updateForm({age: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="currentCollege">Current College</label>
					<input
						type="text"
						className="form-control"
						id="currentCollege"
						value={form.currentCollege}
						onChange={(e) =>
							updateForm({currentCollege: e.target.value})
						}
					/>
				</div>
				<div className="form-group" style={{marginTop: '10px'}}>
					<input
						type="submit"
						className="btn btn-primary"
						value="Create Contact"
					/>
				</div>
			</form>
		</div>
	);
}
