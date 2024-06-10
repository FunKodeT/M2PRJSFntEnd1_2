import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router';

export default function Edit() {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		age: '',
		currentCollege: '',
		records: [],
	});
	const params = useParams();
	const navigate = useNavigate();

	// TEST LINE

	useEffect(() => {
		async function fetchData() {
			const id = params.id.toString();
			const response = await fetch(
				`https://m4pnjsapi.onrender.com/students/${params.id.toString()}`
			);
			if (!response.ok) {
				const message = `An error has occured: ${response.statusText}`;
				window.alert(message);
				return;
			}
			const record = await response.json();
			if (!record) {
				window.alert(`Record with ID: ${id} was not found`);
				navigate('/');
				return;
			}
			setForm(record);
		}
		fetchData();
		return;
	}, [params.id, navigate]);

	// THESE METHODS WILL UPDATE THE STATE PROPERTIES
	function updateForm(value) {
		return setForm((prev) => {
			return {...prev, ...value};
		});
	}

	async function onSubmit(e) {
		e.preventDefault();
		const editedPerson = {
			firstName: form.firstName,
			lastName: form.lastName,
			email: form.email,
			age: form.age,
			currentCollege: form.currentCollege,
		};

		// THIS WILL SEND A POST REQUEST TO UPDATE THE DATA IN THE DATABASE
		await fetch(`https://m4pnjsapi.onrender.com/students/${params.id}`, {
			method: 'PUT',
			body: JSON.stringify(editedPerson),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		navigate('/');
	}

	// THIS FOLLOWING SECTION WILL DISPLAY THE FORM THAT TAKES INPUT FROM THE USER TO UPDATE THE DATA
	return (
		<div>
			<h3>Update Record</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name: </label>
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
					<label htmlFor="lastName">Last Name: </label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						value={form.lastName}
						onChange={(e) => updateForm({lastName: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						className="form-control"
						id="email"
						value={form.email}
						onChange={(e) => updateForm({email: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="age">Age: </label>
					<input
						type="text"
						className="form-control"
						id="age"
						value={form.age}
						onChange={(e) => updateForm({age: e.target.value})}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="currentCollege">Current College: </label>
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
				<br />
				<div className="form-group">
					<input
						type="submit"
						value="Update Record"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
}
