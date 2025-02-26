import './profile.css';
import ProfileIcon from '../../assets/profile-icon.png';

function Profile() {
    return (
        <div id='profile'>
            <div><img width={250} src={ProfileIcon} alt="Profile-Icon" /></div>
            <div id='profile-text'>
                <p>Hello, I am</p>
                <h2>Augustin Muyl</h2>
                <p>Boston University Student</p>
                <div className='icons'>
                    <a href="https://linkedin.com/in/augustinmuyl/"><img id='linkedin-img' width={60} src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" /></a>
                    <a href="https://github.com/augustinmuyl"><img id='github-img' width={60} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile;