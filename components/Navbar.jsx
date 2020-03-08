import Link from '../components/Link';

const Navbar = () => (
    <div>
        <style jsx>{`
        .active {
            color: #FFF;
        }
        `}</style>

        <div className="sticky profile">
        <div className="profile-picture"></div>

        <div className="profile-content">
            <h1 className="user-title">Riku32</h1>
            <div className="user-desc">Programmer and Artist</div>

            <nav className="nav">
            <ul>
                <li>
                    <Link activeClassName='active' href="/"><a><span className="iconify" data-icon="feather-corner-down-right" data-inline="false"></span> Home</a></Link>
                </li>
                <li>
                    <Link activeClassName='active' href="/art"><a><span className="iconify" data-icon="feather-corner-down-right" data-inline="false"></span> Art</a></Link>
                </li>
            </ul>
        </nav>

        <div className="profile-meta-items">
            <div className="profile-meta-item">
                <span className="iconify" data-icon="feather:github" data-inline="false"></span>
                <a>@Riku32</a>
            </div>
        </div>
        </div>

    </div>
    </div>
);

export default Navbar;