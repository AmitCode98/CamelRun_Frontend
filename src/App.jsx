import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <Router>
      <div className='flex flex-col min-h-screen overflow-x-hidden'>
        <Header />
        <main className='flex-grow'>
          <AppRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
