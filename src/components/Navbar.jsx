import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const roleLinks = {
    kid: [
        { label: 'Info', path: '/info' },
        { label: 'Events', path: '/events' },
        { label: 'Announcements', path: '/announcements' },
        { label: 'Leaders', path: '/leaders' },
    ],
    parent: [
        { label: 'Info', path: '/info' },
        { label: 'Events', path: '/events' },
        { label: 'My Kids', path: '/my-kids' },
        { label: 'Announcements', path: '/announcements' },
        { label: 'Leaders', path: '/leaders' },
    ],
    leader: [
        { label: 'Info', path: '/info' },
        { label: 'Events', path: '/events' },
        { label: 'Announcements', path: '/announcements' },
        { label: 'Manage Events', path: '/manage-events' },
        { label: 'Manage Students', path: '/manage-students' },
    ],
    admin: [
        { label: 'Info', path: '/info' },
        { label: 'Events', path: '/events' },
        { label: 'Announcements', path: '/announcements' },
        { label: 'Manage Events', path: '/manage-events' },
        { label: 'Manage Students', path: '/manage-students' },
    ],
};

function Navbar() {
    const { user } = useAuth();
    const links = roleLinks[user?.role] || [];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Logo size="small" />
            </div>
            <ul className="navbar-links">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;