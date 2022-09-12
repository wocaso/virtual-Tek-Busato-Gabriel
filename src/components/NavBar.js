import "./NavBar.css"

function NavBar(){
    return(
        <div className="NavBar">
            <h1 className="elementNav brandNav">V.T</h1>
            <a  className="elementNav anchorNav" href="">Inicio</a>
            <a className="elementNav anchorNav" href="">Consolas</a>
            <a className="elementNav anchorNav" href="">Perifericos</a>
            <a className="elementNav anchorNav" href="">Juegos</a>
        </div>

    );
}

export default NavBar;