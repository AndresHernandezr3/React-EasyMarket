import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaVenta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ventas: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/ventas/').then(res => this.setState({ 
            ...this.state, ventas: res.data
        }));
    }

    render(){
        console.log(this.state.ventas)
        const ventas = this.state.ventas.map( venta =>
            <tr id={venta.id}>
            <th scope ='row'>{venta.id}</th>
            <td>{venta.fechaVenta}</td>
            <td>{venta.clienteID}</td>
            <td>{venta.empleadoID}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/venta/${venta.id}`} className='text-white'> Editar </Link></button></td>
            </BrowserRouter>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-10'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Fecha de la venta</th>
                                        <th scope='col'>ClienteID</th>
                                        <th scope='col'>EmpleadoID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaVenta;