const NavBar = (props) => {
    return (
        <nav className="m-1.5 flex justify-evenly nav">
            <a className="about text-orange-200 text-2xl drop-shadow-lg">About</a>
            <a className="text-violet-200 text-2xl drop-shadow-lg">Projects</a>
            <a className="text-yellow-200 text-2xl drop-shadow-lg">Skills</a>
            {/* <a className="text-yellow-200 text-xl drop-shadow-lg">Download CV</a> */}
        </nav>
    )
}

export default NavBar;