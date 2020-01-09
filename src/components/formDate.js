import React from "react";
import './styles/formDate.css'
import NoDisponible from '../images/no-hay-imagen-4.png'
import axios from 'axios'

export default class formDate extends React.Component {
  state = {
    title: "",
    description: "",
    file: null,
    Rcolor: "",
    Lcolor: "",
    url:NoDisponible
    
  };

  Colors = [
    {"color":"seleccione un color"},
    { "color":"rojo", "codigo":"#D0021B"},
    { "color":"negro", "codigo":"#000000"},
    { "color":"blanco", "codigo" :"#FFFFFF"},
    { "color":"azul", "codigo" :"#0062B1"},
    { "color":"verde", "codigo" :"#194D33" },
    {"color":"amarillo", "codigo":"#F8E71C"},
    {"color":"Rosado", "codigo":"#BD10E0"},
    {"color":"Violeta", "codigo":"#9013FE"},
    {"color":"Azul Marino", "codigo":"#50E3C2"},
    {"color":"Gris", "codigo":"#9B9B9B"},
  ];


 onChangeHandle = (e) =>{//llenar el objeto state cada 1 de sus atributos
  this.setState({
    [e.target.name]:e.target.value
  })
 }

 onChangeHandlePhoto = (e) =>{//del input file recoge el objeto foto y su url desde el cliente

  this.setState({
    file:e.target.files[0],
  })
  this.setState({
    url:URL.createObjectURL(e.target.files[0])
  })

     console.log("url de la foto subida"+this.state.url)
 }

  onChange = (e) => {
  //Busca en el arreglo Colors el codigo que tiene el color que selecciono 
    this.Colors.forEach(item=>{
      if(e.target.value===item.color){
        this.setState({
          Rcolor:item.codigo
        })
      }
    })


  };

  onChange2 = (e) => {
    //Busca en el arreglo Colors el codigo que tiene el color que selecciono 
      this.Colors.forEach(item=>{
        if(e.target.value===item.color){
          this.setState({
            Lcolor:item.codigo
          })
        }
      })
      };

  onSubmit = (e) =>{
    e.preventDefault();
   //Peticion post a la base de datos
   
   let envio = {
    title: this.state.title,
    description: this.state.description,
    file: this.state.file,
    Rcolor: this.state.Rcolor,
    Lcolor: this.state.Lcolor,
   }

   let data = new FormData()
   data.append('title',this.state.title)
   data.append('description',this.state.description)
   data.append('file',this.state.file)
   data.append('Rcolor',this.state.Rcolor)
   data.append('Lcolor',this.state.Lcolor)

   axios.post('http://localhost:8000/api/add/',data)
   .then((res=>{
     alert("funciono")
   })).catch(err=>{
     alert(err)
   })

   this.setState({
    title: "",
    description: "",
    file: null,
    Rcolor: "",
    Lcolor: "",
    url:NoDisponible
   })
  }

  render() {
    return (
      //Formulario aca
      <div>
        <div class="container signup" id="content">
          <div class="row p-2">
            <div class="col-md-10 col-lg-10 mx-auto">
              <div class="card shadow-lg bg-white">
                <div class="card-header">
                  <h2>Subir rutina</h2>
                </div>
                <div class="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        required
                        onChange={this.onChangeHandle}
                        name="title"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Description"
                        name="description"
                        onChange={this.onChangeHandle}
                        required
                      ></textarea>
                    </div>
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlFile1">
                          Example file input
                        </label>
                        <input
                          type="file"
                          class="form-control-file"
                          id="exampleFormControlFile1"
                          name="photo"
                          onChange={this.onChangeHandlePhoto}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          Seleccione un Color 1
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          onChange={this.onChange}
                          style={{backgroundColor:`${this.state.Rcolor}`}}
                        >{this.Colors.map(color=>
                        <option 
                        style={{backgroundColor:`${color.codigo}`}}
                       
                        >{color.color}</option>
                         )}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          Seleccione un Color 2
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          onChange={this.onChange2}
                          style={{backgroundColor:`${this.state.Lcolor}`}}
                        >{this.Colors.map(color=>
                        <option 
                        style={{backgroundColor:`${color.codigo}`}}
                       
                        >{color.color}</option>
                         )}
                        </select>
                      </div>
                    </form>
                    <div class="form-group">
                      <input type="submit" class="btn btn-success btn-block" />
                        
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
          <div className="thumbnail">
            <img src={this.state.url}></img>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
