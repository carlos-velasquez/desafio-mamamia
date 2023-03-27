import { useContext } from "react";
import Context from "../Context";
import Button from 'react-bootstrap/Button';

const Carro = () => {

    const { carrito, montoTotal, Agregar, Quitar } = useContext(Context)

    return (
        <div className='container p-5 border'>
            <h3>Detalles del pedido:</h3>
            {carrito.map((dato) => (
                <div key={dato.id} className="  d-flex p-2 align-items-center" >
                    <div className="1 me-auto d-flex ">
                        <img className="ms-auto" src={dato.img} alt="foto pizza" style={{ margin: '0', height: '50px', width: '70px' }} />
                        <p className="m-3">{dato.name}</p>
                    </div>
                    <div className="2 p-0 d-flex">
                        <p className="m-3">${dato.cantidad * dato.price}</p>
                        <Button className="bg-danger" style={{ margin: '0', height: '3rem', width: '3rem' }} onClick={() => (Quitar(dato.id))}> - </Button>
                        <p className="m-3">{dato.cantidad}</p>
                        <Button className="bg-primary" style={{ margin: '0', height: '3rem', width: '3rem' }} onClick={() => (Agregar(dato.id))} > + </Button>
                    </div>
                    
                </div>
            ))
            }

            <h2>Total: $ <span>{montoTotal}</span></h2>
            <Button variant="success" size='lg'>Ir a pagar</Button>

        </div>
    )
}

export default Carro;