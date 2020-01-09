import React from 'react';
import Card from './Card'
import Axios from 'axios'

class ListCard extends React.Component{

    state = {
        array:[]
    }
    
    //creo un arreglo en estate para mapearle el arreglo que trae el get
    //el arreglo del state me permite recorrelos y por cada posicion usar el componente card
    //para pintar cada posicion del arreglo

    //1.Crear funcion que pase los parametros de una carta al componente carta
    //2. Crear un ciclo para que las cartas que se traen con get se pinten con el componente

    traeComponentesdeCarta = e =>{

        Axios.get('http://localhost:8000/api/add/')
        .then((res=>{
            this.setState({
                array:res.data
            })
           // props.actualiza((data.title,data.description,data.file,data.Rcolor,data.Lcolor))
        
          })).catch(err=>{
            alert(err)
        })

    }


    componentDidMount = () =>{
        this.traeComponentesdeCarta()
    }


    cambioStateEnCard = e =>{
    return e
    }

    render(){
    return(
        this.state.array.map(card=>
        <Card retorno={this.cambioStateEnCard(card)} />
    ))
    } 
        
    
}

export default ListCard;