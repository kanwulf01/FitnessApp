import React from 'react';
import exercise from '../images/exercise.png';
import './styles/Card.css'
import circlesImg from '../images/circles.png'
import { Link } from 'react-router-dom'

export default class Card extends React.Component{

    state = {
        title:"",
        description:"",
        file:null,
        Rcolor:"",
        Lcolor:"",
    }
    
//funcion que cambie el stado de mi estate por medio de props

    cambiaState = () =>{
        const newState = this.props.retorno
        this.setState({
            title:newState.title,
            description:newState.description,
            file:newState.file,
            Rcolor:newState.Rcolor,
            Lcolor:newState.Lcolor
        })

    }

    componentDidMount = () =>{
        this.cambiaState()
    }

       
    
    //Hacer que el usuario edite el campo a insertar
    render(){
        return(
            <React.Fragment>
           
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.state.Lcolor}, 
                    ${this.state.Rcolor})`
            }}
            >
                <div className="card-body">
                <div className="row center">
             <div className="col-6">
                    <div className="thumbnail">
                     <img src={this.state.file}  className="float-right" />
                     </div>
                 </div>
             
             <div className="col-6 Fitness-Card-Info">
        <h1>{this.state.title}</h1>
        <Link to='/Cardpage'>Descripcion...</Link>
             </div>
         </div>
                </div>
            </div>
            </React.Fragment>
       
        )
    }

}