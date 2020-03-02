import React, { Component } from 'react'
import axios from 'axios'

export class MunicipioForm extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            nombre : ''
        }
        
    }
    handleChange = (e) => {
        this.setState({ nombre: e.target.value })
    }
    resetForm(){
        this.nombre = '';   
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {nombre}= this.state;
        if (nombre === ''){
            alert("No puede haber campos vacios");
        } else {
            
            axios.post(`http://127.0.0.1:8000/municipios/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            });
            const allInfo = `Ha agregado con exito la ciudad`;
            alert(allInfo); 
        }

       
        
    }
    
    render(){
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Municipio</h4>
                        </div>
                        <div className='card-body'>

                            <form method="post">
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                <div class="invalid-feedback">
                                    Por favor introduzca un valor
                                </div>
                                
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );

    }
}

export default MunicipioForm;