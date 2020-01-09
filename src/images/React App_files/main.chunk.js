(this["webpackJsonpspeech-text"] = this["webpackJsonpspeech-text"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_VozTexto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/VozTexto */ "./src/Components/VozTexto.js");
/* harmony import */ var _Components_Test2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Test2 */ "./src/Components/Test2.js");
/* harmony import */ var _Components_Test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Test */ "./src/Components/Test.js");
/* harmony import */ var _Components_Respaldo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Respaldo */ "./src/Components/Respaldo.js");
/* harmony import */ var _Components_SpeechTextFunciona__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/SpeechTextFunciona */ "./src/Components/SpeechTextFunciona.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/App.js";











function App() {
  //Crear funcione que mande los datos
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Respaldo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

/***/ "./src/Components/SpeechTextFunciona.js":
/*!**********************************************!*\
  !*** ./src/Components/SpeechTextFunciona.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/SpeechTextFunciona.js";


function SpeechTextFunciona() {
  let finalTranscript = '';
  let estado2 = 'iniciado';
  /*let estado = 'Captura Audio A texto';
  let entorno = '';
  let textoTranscrito = '';*/
  //Implementar funciones de llamado de microfono

  function captura() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = true;

    recognition.onresult = event => {
      console.log("EVENTO DE ESCUCHA");

      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {} else {
          finalTranscript += transcript;
        }
      }
    };

    recognition.onend = () => {
      console.log("inicio de estado final");

      if (estado2 === 'detenido') {
        console.log("entro al estado final");
        recognition.stop();
      } else {
        if (estado2 === 'iniciado') {
          alert("va a reiniciarse");
          recognition.start();
        }
      }
    };

    console.log("Se activo");
  } ///Controlar cuando se vaya a cerrar el audio
  /////////////////////////////////////


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Voz a Texto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "btn btn-danger",
    onClick: captura(),
    value: "Presionar",
    readOnly: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "parrafo col-md-12",
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, finalTranscript));
}

/* harmony default export */ __webpack_exports__["default"] = (SpeechTextFunciona);

/***/ }),

/***/ "./src/Components/Test.js":
/*!********************************!*\
  !*** ./src/Components/Test.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-speech-recognition */ "./node_modules/react-speech-recognition/lib/index.js");
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/Test.js";



const propTypes = {
  // Props injected by SpeechRecognition
  transcript: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  resetTranscript: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  browserSupportsSpeechRecognition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: resetTranscript,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, transcript));
};

Dictaphone.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (react_speech_recognition__WEBPACK_IMPORTED_MODULE_2___default()(Dictaphone));

/***/ }),

/***/ "./src/Components/Test2.js":
/*!*********************************!*\
  !*** ./src/Components/Test2.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ventana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ventana */ "./src/Components/Ventana.js");
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/Test2.js";


class Test2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      finalTranscript: '',
      interimTranscript: '',
      boleano: true,
      estado: 'Audio a Texto',
      estado2: '',
      entorno: '',
      captura: 'start',
      array: []
    };

    this.alternaEstado = () => {
      console.log("entro a estado de no parar");

      if (this.state.entorno === 'muestra') {
        return this.state.finalTranscript;
      } else {
        console.log("entra a estado de parar");
        return this.state.interimTranscript;
      }
    };

    this.onChange2 = e => {
      /////////////////////////////////////////////////////////////////////////
      //condicional donde evalue un estado, si ese estado esta detenido ya no se grabe absolutamente nada
      //inicia
      console.log("inicia siempre");
      window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition; //intentar con el limitante del for
      //No para hasta que la persona deje de hablar
      //Cuando se presione start alterar un estado para que el evento sea 0,
      //o la longitud del arreglo sea vacio

      let recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = true;
      let textoTranscrito = '';

      recognition.onresult = event => {
        console.log("EVENTO DE ESCUCHA");

        for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
          let transcript = event.results[i][0].transcript;

          if (event.results[i].isFinal) {} else {
            textoTranscrito = transcript;
            console.log(textoTranscrito);
            this.setState({
              finalTranscript: textoTranscrito
            });
            this.setState({
              array: [...this.state.array, this.state.finalTranscript]
            });
          }
        }
      }; //Validacion absoluto al problema del  parar la captura
      //Aca mapea lo capturado por el audio a la variable del state de React


      if (this.state.captura === 'start') //Control de la seguridad del audio capturado
        {
          //Captura el audio en la variable real
          console.log("entro al start");
          this.setState({
            finalTranscript: textoTranscrito
          });
        } else {
        //Captura el audio en variable falsa
        alert("entro al stop");
        this.setState({
          interimTranscript: textoTranscrito
        });
      }

      console.log(this.state.finalTranscript + this.state.interimTranscript);

      recognition.onend = () => {
        console.log("inicio de estado final");
        console.log("estado actual" + " " + this.state.estado2);

        if (this.state.estado2 === 'detenido') {
          console.log("entro al estado final");
          recognition.stop();
        } else {
          if (this.state.estado2 === 'iniciado') {
            alert("va a reiniciarse");
            recognition.start();
          }
        }
      };

      console.log("entra aca"); //termina

      if (this.state.estado === 'Parar') {
        //Entra aca si ya presiono Start
        //Aca debo matar el evento y evitar que se guarde o se muestre texto en la interfaz
        alert("entro al parar");
        this.setState({
          captura: 'stop'
        });
        console.log("paro");
        recognition.stop();
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
        this.setState({
          entorno: ''
        });

        recognition.onspeechend = function () {
          console.log('Speech has stopped being detected');
        };

        alert(this.state.captura);
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
        alert("Arranco" + this.state.captura);
        this.setState({
          captura: 'start'
        });
      } //if principal

    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Voz a Texto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "btn btn-danger",
      onClick: this.onChange2,
      value: this.state.estado,
      readOnly: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "parrafo col-md-12",
      style: {
        color: "red"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, this.state.finalTranscript.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ventana__WEBPACK_IMPORTED_MODULE_1__["default"], {
      datos: this.state.finalTranscript,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/Components/Ventana.js":
/*!***********************************!*\
  !*** ./src/Components/Ventana.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/Ventana.js";


function Ventana(props) {
  //Recibir los datos aca y pintarlos
  function traeDatos() {
    //probar con arreglos
    let data = [];
    data.push(props.datos);
    console.log("hola mundo");
    return data[0];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, traeDatos());
}

/* harmony default export */ __webpack_exports__["default"] = (Ventana);

/***/ }),

/***/ "./src/Components/VozTexto.js":
/*!************************************!*\
  !*** ./src/Components/VozTexto.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VozTexto; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-speech-recognition */ "./node_modules/react-speech-recognition/lib/index.js");
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_speech_recognition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/Components/VozTexto.js";



class VozTexto extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    this.Sonido = () => {};
  }

  ejecutar(e) {
    for (let i = e.resultIndex; i < e.result.length; i++) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.e.result[i][0].transcript);
    }
  }

  componentDidMount() {
    if (!("SpeechRecognition" in window)) {
      let rec = new react_speech_recognition__WEBPACK_IMPORTED_MODULE_1___default.a();
      rec.lang = "es-AR";
      rec.continuous = true;
      rec.interim = true;
      react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(this).addEventListener("resuelt", this.ejecutar);
      rec.start();
    } else {}
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/chrisdavid/Escritorio/speech-text/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/chrisdavid/Escritorio/speech-text/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/chrisdavid/Escritorio/speech-text/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/chrisdavid/Escritorio/speech-text/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map