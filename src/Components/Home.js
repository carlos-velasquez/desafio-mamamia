import Pizzas from "./Pizzas";
import imgPizza from '../assets/img/imgpizza2.jpg'
import '../assets/css/Home.css'

const Home = () => {
    return (
        <div className="background text-center justify-content-center" style={{ backgroundImage: `url(${imgPizza})`, backgroundRepeat: 'no-repeat', height: '270px', backgroundSize: 'cover' }}>
            <h1 className="titulo">¡Pizzería Mamma Mía!</h1>
            <p className="subtitulo">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr style={{ width: '50%', margin: '0', height: '5px', opacity: '60%', color: 'white' }} /><p>.</p>
            <Pizzas />
        </div>

    )
}

export default Home;