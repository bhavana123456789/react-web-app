import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/he')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Home Page</h1>
      <button aria-label="Start" onClick={handleStart}>
        Start
      </button>
    </div>
  )
}

export default Home
