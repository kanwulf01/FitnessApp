import React from 'react';
import './styles/Home.css'
import { Link } from 'react-router-dom'


export default class Home extends React.Component{

    render(){
        return(
            <div>
          
                
  <div class="container">
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-file-text-o"></i>
    </div>
    <div className="project-name">
   <p> <Link to='/form'>Agregar Rutina</Link></p>
    </div>
  </div>
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-th-list"></i>
    </div>
    <div className="project-name">
      <p><Link to='/list'>Listar Rutina</Link></p>
    </div>
  </div>
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-th-large"></i>
    </div>
    <div className="project-name">
      <p>Otros</p>
    </div>
  </div>  
</div>
            </div>
        )
    }
}