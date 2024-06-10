import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from './Loader/Loader';

const Record = (props) => (
	<tr>
		<td>{props.record.firstName}</td>
		<td>{props.record.lastName}</td>
		<td>{props.record.email}</td>
		<td>{props.record.age}</td>
		<td>{props.record.currentCollege}</td>
		<td>
			<Link className="btn btn-link" to={`/edit/${props.record._id}`}>
				Edit
			</Link>
			|
			<button
				className="btn btn-link"
				onClick={() => {
					props.deleteRecord(props.record._id);
				}}>
				Delete
			</button>
		</td>
	</tr>
);

export default function RecordList() {
	const [loading, setLoading] = useState(true);
	const [records, setRecords] = useState([]);

	// THIS METHOD FETCHES THE RECORDS FROM THE DATABASE
	useEffect(() => {
		setLoading(true);
		async function getRecords() {
			const response = await fetch(
				`https://m4pnjsapi.onrender.com/students`
			);
			console.log(response);
			if (!response.ok) {
				const message = `An error has occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}
			const records = await response.json();
			setRecords(records);
		}
		getRecords();
	}, [records.length]);

	// THIS METHOD WILL DELETE A RECORD
	async function deleteRecord(id) {
		await fetch(`https://m4pnjsapi.onrender.com/students`, {
			method: 'DELETE',
		});
		const newRecords = records.filter((el) => el._id !== id);
		setRecords(newRecords);
	}

	// THIS METHOD WILL MAP OUT THE RECORDS ON THE TABLE
	function recordList() {
		return records.map((record) => {
			loading ? <loader /> : recordList();

			return (
				<Record
					record={record}
					deleteRecord={() => deleteRecord(record._id)}
					key={record._id}
				/>
			);
		});
	}

	// THIS FOLLOWING SECTION WILL DISPLAY THE TABLE WITH THE RECORDS OF INDIVIDUALS
	return (
		<div className="container">
			<h3 className="contact-title">Contact List</h3>
			<table className="table table-striped" style={{marginTop: 20}}>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Current College</th>
						<th>Modify Student</th>
					</tr>
				</thead>
				<tbody>{recordList()}</tbody>
			</table>
		</div>
	);
}
