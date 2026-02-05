import Logo from '../components/Logo';
import Button from '../components/Button'

function HomePage(){
    return(
        <div className="home-page">
            <div className="info-button-container">
                <Button>What is YoungLife?</Button>
            </div>
            <div className="logo-container">
                <Logo size="large" />
            </div>
            <div className="auth-button-container">
                <Button>Sign Up</Button>
                <Button>Log In</Button>
            </div>
        </div>
    )
}


export default HomePage;