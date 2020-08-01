/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import * as myObj from './compoents/product/list';\r\n// import {obj2} from './compoents/product/list';\r\n// import myValue from './compoents/product';\r\n\r\n\r\n// eager\r\n// calback\r\n// promise\r\n// async/await\r\n//generator // yield\r\n\r\n// observable --> lazy\r\n\r\n// function log3(){\r\n\r\n//     setTimeout(() => {\r\n//         console.log('3');\r\n//     }, 0)\r\n\r\n// }\r\n\r\n\r\n// function log1(){\r\n//     setTimeout(() => {\r\n//         console.log('1');\r\n//     })\r\n// }\r\n// function log2(){\r\n//     setTimeout(() => {\r\n//         console.log('2');\r\n//     }, 200)\r\n\r\n// }\r\n\r\n// function log4(){\r\n//     console.log('4');\r\n\r\n// }\r\n\r\n// log4();\r\n// log1();\r\n// log3();\r\n// log2();\r\n// 4-1-3-2\r\n\r\n// const products = [\r\n//     {id: 1, name: 'product 1', price: 1000},\r\n//     {id: 2, name: 'product 2', price: 2000},\r\n//     {id: 3, name: 'product 3', price: 3000}\r\n// ];\r\n\r\n\r\n// function getProducts(){\r\n//     let output = \"\";\r\n//     products.map((item) => {\r\n//         output += `\r\n//             <li>product ID-- ${item.id} - Name: ${item.name}</li>\r\n//         `;\r\n//     });\r\n\r\n//     document.getElementById('root').innerHTML =output;\r\n// }\r\n\r\n\r\n// function createProduct(product, cb){\r\n//     setTimeout(() => {\r\n//         // push truoc\r\n//         products.push(product);\r\n//         //goi sau\r\n//         cb();\r\n//     }, 2000);\r\n// }\r\n\r\n// createProduct({id: 4, name: 'product 4', price: 900}, getProducts);\r\n\r\n\r\n// document.getElementById('root').innerHTML = \"<h1>Hello VTA</h1>\";\r\n\r\n\r\n// resolve\r\n// reject\r\n\r\n// function getYourPromise(){\r\n//     const error = true;\r\n//     if(!error){\r\n//         return Promise.resolve('I keep my promise');\r\n//     } else {\r\n//         return Promise.reject('I Didnt keep my promise !');\r\n//     }\r\n// }\r\n\r\n// getYourPromise()\r\n//     .then(res => {\r\n//         console.log(res);\r\n//         let data = res;\r\n//     })\r\n//     .catch(error => console.log(error));\r\n\r\n// function getMyProducts(){\r\n//     return new Promise((resolve, reject) => {\r\n//         const error = false;\r\n//         if(!error){\r\n//             resolve('promise solve');\r\n//         } else {\r\n//             reject('you missed your promise');\r\n//         }\r\n//     });\r\n// }\r\n\r\n// function getValue(){\r\n//     return new Promise((resolve, reject) => {\r\n//         resolve(999);\r\n//     });\r\n// }\r\n\r\n// async function getPosts(){\r\n//     let x = await getValue();\r\n//     return x + 1;\r\n// }\r\n\r\n// let y = getPosts().then((res) => {\r\n//     console.log(res);\r\n// })\r\n// console.log(20+y);\r\n\r\n\r\n\r\n// function getProducts(){\r\n//     let output = \"\";\r\n//     products.map((item) => {\r\n//         output += `\r\n//             <li>product ID-- ${item.id} - Name: ${item.name}</li>\r\n//         `;\r\n//     });\r\n\r\n//     document.getElementById('root').innerHTML =output;\r\n// }\r\n\r\n// async function getProduct(){\r\n//     setTimeout(() => {\r\n//         // push truoc\r\n\r\n//         products.push(product);\r\n\r\n//         resolve();\r\n        \r\n//     }, 2000);\r\n// }\r\n// function createProduct(product){\r\n//     return new Promise((resolve, reject) => {\r\n\r\n//         setTimeout(() => {\r\n//             // push truoc\r\n\r\n//             // products.push(product);\r\n\r\n//             resolve(product);\r\n            \r\n//         }, 2000);\r\n\r\n//     });\r\n// }\r\n\r\n// async function getProduct(){\r\n//     let product = await createProduct({id: 4, name: 'product 4', price: 900});\r\n//     products.push(product)\r\n//     return products;\r\n// }\r\n\r\n// getProduct().then((res) => {\r\n//     console.log('res', res);\r\n\r\n//     getProducts();\r\n// }).catch(() => console.log('gg'));\r\n\r\n// createProduct({id: 4, name: 'product 4', price: 900}).then((res) => {\r\n//     getProducts();\r\n// });\r\n\r\n// let myProduct = getProduct();\r\n// console.log(myProduct);\r\n\r\n// function* myGenerator(){\r\n//     yield 1;\r\n//     console.log(1);\r\n//     // while(true){\r\n//     //     yield 2;\r\n\r\n//     //     console.log('I run always');\r\n//     // }\r\n//     yield {id: 1, message: 'what you want'};\r\n// }\r\n\r\n// let myGen = myGenerator();\r\n\r\n// console.log(myGen.next().value);\r\n// console.log(myGen.next().value);\r\n// console.log(myGen.next().value);\r\n\r\n// export name, \r\n// export default\r\n\r\n// console.log(myObj.obj);\r\n// myObj.obj23\r\n\r\n// let myvar = myObj.obj2;\r\n// let myVar2 = obj2;\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });