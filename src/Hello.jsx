import { useNavigate } from "react-router-dom"

function Hello() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')

    }
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello World</h1>
            {/* <button aria-label="Go Back" onClick={() => navigate('/')}>
                Go Back
            </button> */}

            <button aria-label="Go Back" onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default Hello
