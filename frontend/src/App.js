import { Routes, Route, Navigate } from 'react-router';
import './App.scss';
import LoginForm from './components/Form/LoginForm';
import RegisterForm from './components/Form/RegisterForm';
import Page404 from './pages/404Page/404Page';
function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Navigate to='/register' />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/register' element={<RegisterForm />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;
