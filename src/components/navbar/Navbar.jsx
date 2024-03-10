import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            {/*Sidebar*/}
            <div className="wrapper">
                <span className="name">Neha</span>
                <div className="info">
                    <span>About</span>
                    <span>Projects</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
