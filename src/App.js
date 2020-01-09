import React from 'react';
import { Link } from 'react-router-dom'
import Router from './router';
import Home from './components/Home'

class App extends React.Component {
/*
   <Link to='/form'>Form</Link>
      <Link to= '/list'>Lista</Link>
      <Link to='/'>Home</Link>
    <Router></Router>
*/
  render(){
  return (//lo que se ponga aca se ve en toda la pagina hace de home
    <div className="App">
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" ><strong>Exercise</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link to='/'> <a className="nav-link" >Home<span class="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item">
       <Link to='/list'><a className="nav-link" >List_Exercise</a></Link> 
      </li>
      <li className="nav-item">
        <Link to='/form'><a className="nav-link" >Add_rutina</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Logout</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
   

   <Router><Home/></Router>
    </div>
  );
}
}
export default App;
