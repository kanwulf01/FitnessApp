webpackHotUpdate("main",{

/***/ "./src/Components/Respaldo.js":
/*!************************************!*\
  !*** ./src/Components/Respaldo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ventana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ventana */ "./src/Components/Ventana.js");
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/Respaldo.js";


class Test2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      finalTranscript: '',
      audioCaptura: '',
      interimTranscript: '',
      boleano: true,
      estado: 'Audio a Texto',
      estado2: ''
    };

    this.onChange2 = e => {
      //condicional donde evalue un estado, si ese estado esta detenido ya no se grabe absolutamente nada
      //inicia
      console.log("inicia siempre");
      window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      let recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.maxAlternatives = 10;
      recognition.continuous = true;
      let textoTranscrito = '';
      let contador = 0;
      let transcript;
      let variable = '';

      recognition.onresult = event => {
        transcript = event.results[0].transcript;
        alert(transcript);

        if (event.results[0].isFinal) {} else {
          variable = transcript;
          let nuevo = this.state.finalTranscript + variable;
          this.setState({
            finalTranscript: ''
          });
          variable = '';
          this.setState({
            finalTranscript: nuevo
          });
        }
        /* 
        hola va a transcript y se suma a finaltrsnacrip que es vacio
        finaltranscript = hola
        habla verde, ahora trasncript es verde
        ahora variable es hola verde y se guarda en finaltranscript
        ahora finaltrsncript es holaverde,
        ingresa amarillo por transcript, se suma holaverde+transcript
         */
        //Hacer algo cuando se reinicie la escucha porque se rrellena lo que ya estaba


        console.log(contador);
        /*
        let newState2 = this.state.finalTranscript + textoTranscrito
        this.setState({
          interimTranscript:newState2,
        })*/

        if (this.state.finalTranscript === 'Hola' || this.state.finalTranscript === 'hola') {
          alert("Maquina Responde: Como esta usted");
        } else {
          if (this.state.finalTranscript === 'verde' || this.state.finalTranscript === 'Verde') {
            alert("es un color");
          }
        }
      };

      recognition.onend = () => {
        console.log("inicio de estado final");
        console.log("estado actual" + this.state.estado2);

        if (this.state.estado2 === 'detenido') {
          console.log("entro al estado final");
          recognition.stop();
          recognition.abort();
        } else {
          if (this.state.estado2 === 'iniciado') {
            alert('reiniciando esucha');
            recognition.start();
            /*  let newState = this.state.interimTranscript + this.state.finalTranscript
              this.setState({
                interimTranscript:newState,
              })
              alert(this.state.interimTranscript)*/
          }
        }
      };

      console.log("entra aca"); //termina

      if (this.state.estado === 'Parar') {
        //Entra aca si ya presiono Start
        //Aca debo matar el evento y evitar que se guarde o se muestre texto en la interfaz
        console.log("paro");
        recognition.stop();
        recognition.abort(); //

        recognition = '';
        this.setState({
          estado2: 'detenido'
        });
        console.log(e.target.value);
        this.setState({
          boleano: true
        });
        this.setState({
          estado: 'Audio a Texto'
        });
        this.setState({
          finalTranscript: ''
        });
      } else {
        //Viene aca al arrancar
        if (this.state.boleano === true) {
          recognition.start();
          this.setState({
            boleano: false
          });
          this.setState({
            estado2: 'iniciado'
          });
        }

        this.setState({
          estado: 'Parar'
        });
        console.log(this.state.estado);
      } //if principal

    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Voz a Texto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "btn btn-danger",
      onClick: this.onChange2,
      value: this.state.estado,
      readOnly: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, this.state.finalTranscript));
  }

}

/***/ })

})
//# sourceMappingURL=main.849580b03244b96d8156.hot-update.js.map