import Logo from '../components/Logo';
import Button from '../components/Button';
import { useState } from 'react';
import Modal from '../components/Modal';
function HomePage(){
    const [activeModal, setActiveModal] = useState(null);

    return(
        <div className="home-page">
            <div className="info-button-container">
                <Button onClick={() => setActiveModal('whatsyounglife')}>What is YoungLife?</Button>
            </div>
            <div className="logo-container">
                <Logo size="large" />
            </div>
            {
                activeModal === 'whatsyounglife' && (
                    <Modal onClose={() => setActiveModal(null)}>
                        <h2>What's YoungLife?</h2>
                        <p>info</p>
                    </Modal>
                )
            }
            {activeModal === 'signup' && (
                <Modal onClose={() => setActiveModal(null)}>
                    <h2>Sign Up</h2>
                    <p>Sign up form coming soon...</p>
                </Modal>
            )}

            {activeModal === 'login' && (
                <Modal onClose={() => setActiveModal(null)}>
                    <h2>Log In</h2>
                    <p>Login form coming soon...</p>
                </Modal>
            )}
            <div className="auth-button-container">
                <Button onClick={() => setActiveModal('signup')}> Sign Up</Button>
                <Button onClick={() => setActiveModal('login')}> Log In</Button>
            </div>
        </div>
    )
}


export default HomePage;