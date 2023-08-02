import './App.css'
import './styles/NavBAr.scss'
import './styles/HomePage.scss'
import HomePage from './pages/HomePage'
import NavBAr from './components/NavBar'

function App() {
	return (
		<>
			<main className='app'>
				<NavBAr/>
				<HomePage/>
			</main>
		</>
	)
}

export default App
