import '../assets/css/Navbar.css'
import { Link } from "react-router-dom";
import Context from "../Context";
import { useContext } from "react";

const Navbar = () => {

    const { montoTotal } = useContext(Context)
    return (
        <div className="navbar">
            
                <Link className='none' to="/">🍕 <strong>Pizzería Mamma Mía!</strong> </Link>  
                <Link className='none' to="/carrito"> <span className="carro">🛒</span>  ${montoTotal} </Link>
            
        </div>

    )
}

export default Navbar;