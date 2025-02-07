import 'bootswatch/dist/darkly/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import RecordList from './components/RecordList';
import Create from './components/Create';
import Edit from './components/Edit';
import Style from './App.css';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<RecordList />} />
				<Route exact path="/contacts/create" element={<Create />} />
				<Route exact path="/edit/:id" element={<Edit />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
