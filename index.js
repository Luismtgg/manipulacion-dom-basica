// const respuesta = document.querySelector("#respuesta");

// const tipoDeCarro = "ertryrtyrtyrty";

// switch(tipoDeCarro){
//     case "chevy":
//         respuesta.innerText = "Auto modelo 20xx cuyo valor de mercardo es $xxxx";
//         break;
//     case "gol":
//         respuesta.innerText = "Auto modelo 20xx cuyo valor es $xxxxx mxn";
//         break;
//     case "kicks":
//         respuesta.innerText = "Camioneta 20xxcuyo valor ronda los xxxxxx";
//         break;
//     default:
//         respuesta.innerText = "";
//         break; 
// };

// // {
// // for (let i = 1; i < 101; i++){
// //     console.log("El resultado de i es " + i);
// // }
// // };

// // let i = 0;

// // while(i < 101){
// // console.log("valor de i es " + i);
// // i++
// // }

// let i = 0
// do{
//   i++  
//   console.log(`El valor de i es ${i}`);
// }while(i < 100);

// let respuesta;
// while(respuesta != "4"){
//     let pregunta = prompt("¿Cuanto es 2 + 2");
//     respuesta = pregunta;
//     console.log(respuesta)
// }

// let arrayNombres = ["Luis", "Manuel", "Perla"];

// // for(i = 0; i < arrayNombres.length; i++){
// //     console.log(`Hola tu nombre es ${arrayNombres[i]}`);
// // }

// let obj = {
//     nombre: "Luis",
//     edad: 25, 
//     comidaFavorita: ["tacos de barbacoa", "camarones capeados"],
// };
// // console.log(obj)

// // function imprimirArray(array){
// //     for(let i = 0; i <= array.length; i++){
// //     console.log(array[i])};
// // };

// // imprimirArray(arrayNombres);

// function objArray(obj1){
//     let objArray = Object.values(obj1);
//     for(let i = 0; i < objArray.length; i++){
//     console.log(objArray[i])}; 
// }

// objArray(obj)

// function sucripciones(tipoDeSuscripcion){
//     if(tipoDeSuscripcion == "basico"){
//         console.log("Tu suscripcion es basica");
//         return;
//     }
//     if(tipoDeSuscripcion == "mediana"){
//         console.log("Tu suscripcion es mediana");
//         return;
//     }
//     if(tipoDeSuscripcion == "expeeta"){
//         console.log("Tu suscripcion es experta");
//         return;
//     }
//     console.warn("Esa funcion no existe")
// };

// sucripciones("exkpeeta");

// const tipoDeSuscripciones = {
//     basica: "Tu suscripcion es basica",
//     mediana: "Tu suscripcion es mediana",
//     experta: "Tu suscripcion es experta",
// } 

// const suscripcion = "experta";

// function tipoDeSucripcion(suscripcionx){
// console.log(tipoDeSuscripciones[suscripcionx]);
// }

// tipoDeSucripcion(suscripcion)

// console.log({
//     titulo,
//     parrafo1,
//     parrafoClase,
//     parrafoID,
// })


// titulo.innerText = "Manipulacion del DOM Profesional experta"

// const imagen = document.createElement("img")

// imagen.setAttribute("src", "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/toyotaro-dragon-ball-super-ilustracion.jpg?resize=1280%2C720&quality=80&ssl=1");
// imagen.setAttribute("width", "250")
// parrafoID.replaceWith(imagen);

// function inputChange(){
//     console.log("Se hizo un cambio leyendo desde JS")
// };

// function buttonClick(){
//     const sumarValores = Number(input1.value) + Number(input2.value)
//     parrafo1.innerText = "El restultado de la suma es: " + sumarValores;
// }


const titulo = document.querySelector("h1");
const parrafo1 = document.querySelector("p");
const parrafoClase = document.querySelector(".parrafito");
const parrafoID =document.querySelector("#pid")
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const boton = document.querySelector("button");
const formulario = document.querySelector("form");



function SumarValores(event){
    event.preventDefault()
    const sumaInputs = Number(input1.value) + Number(input2.value);
    parrafo1.innerText = "Resultado " + sumaInputs; 
};

formulario.addEventListener("submit", SumarValores);


