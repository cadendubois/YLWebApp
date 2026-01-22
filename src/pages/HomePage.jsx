import Logo from '../components/Logo';
import Button from '../components/Button'

function HomePage(){
    return(
        <div className="home-page">
            <div className="container">
                <Button>What is YoungLife?</Button>
                <Logo size="large" />
                <Button>Sign Up</Button>
                <Button>Log In</Button>
            </div>
        </div>
    )
}


export default HomePage;