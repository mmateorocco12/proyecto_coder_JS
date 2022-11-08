// let producto01 = "Figura Goku Base";
// let producto02 = "Figura Homelander";

// let PrecioProducto01 = 100;
// let PrecioProducto02 = 200;

// let TotalProductos = prompt("¿Cuantos productos va a llevar? Recuerde que no puede acumular mas de 5.")

// function CantidadProductos(){

//     if(TotalProductos > 5){
//         let NoHay = "No es posible pedir " + TotalProductos + ", por favor ingrese otro valor."
//         alert(NoHay);
//         let NuevoValor = prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
//         if(NuevoValor <= 5){
//             let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor;
//             alert(AhoraSi);
//         }
//         while (NuevoValor > 5){
//             let NuevoValor= prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
//             if(NuevoValor <= 5){
//                 let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor;
//                 alert(AhoraSi);
//                 break;
//             }
//         }
//     }
//     else{
//         let SiHay = "Perfecto! Has elegido comprar " + TotalProductos;
//         alert(SiHay);
//     }
// }

// function ValorCompra(){
//     let TotalProd01 = prompt("Cuantos " + producto01 + " vas a llevar? Su precio es de " + PrecioProducto01);
//     TotalProd01 = Number(TotalProd01);

//     if(TotalProd01 > 5){
//         let TooMuch = "Son demasiados productos! Intentalo de nuevo"
//         alert(TooMuch);
//         while (TotalProd01 > 5){
//             let NuevoValor = prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
//             NuevoValor = Number(NuevoValor);
//             if(NuevoValor <= 5){
//                 let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor + " " + producto01 + ". El total de tu compra es de " + NuevoValor * PrecioProducto01;
//                 alert(AhoraSi);
//                 break;
//             }
//         }
//     }
//     else if(TotalProd01 == 5){
//         let MaxProds = "Este es el maximo de productos, no podes añadir mas. Tu Compra se realizo con exito! El total es de " + TotalProd01 * PrecioProducto01;
//         alert(MaxProds);
//     }
//     else{
//         let TotalProd02 = prompt("Genial! Cuantos " + producto02 + " vas a llevar? Su precio es de " + producto02);
//         TotalProd02 = Number(TotalProd02);

//         if(TotalProd02 > 5 || TotalProd01 + TotalProd02 > 5){
//             console.log(TotalProd01 + TotalProd02)
//             let TooMuch = "Son demasiados productos! Intentalo de nuevo"
//             alert(TooMuch);
//         }
//         else{

//             let CompraExitosa = "Tu Compra se realizo con exito! El total es de " + (TotalProd01 * PrecioProducto01 + TotalProd02 * PrecioProducto02)
//             alert(CompraExitosa);
//         }
//     }
// }

// CantidadProductos();
// ValorCompra();
function Figuras(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
const Figura01 = new Figuras("Goku Base", 5000, 15);
const Figura02 = new Figuras("Homelander", 7500, 10);
const Figura03 = new Figuras("Darth Vader", 10000, 8);
const Figura04 = new Figuras("Superman", 10000, 20);
const Figura05 = new Figuras("Batman", 5500, 5);

const Productos = [];

Productos.unshift(Figura01);
Productos.push(Figura02);
Productos.push(Figura03);
Productos.push(Figura04);
Productos.push(Figura05);

console.log(Productos)

const Nombres = Productos.map((Producto) => Producto.nombre);

console.log(Nombres);

function ElegirProducto() {

    alert("Bienvenido a ActionStore! Nuestra lista de productos en stock es la siguiente: " + Nombres.join("   -   "));

    let QuePersonaje = prompt("Elija que Figura va a llevar. Escriba el Nombre del personaje tal y como sale al principio");

    const PersonajeElegido = Productos.find((Personaje) => Personaje.nombre === QuePersonaje);
    const Existe = Productos.some((Personaje) => Personaje.nombre === QuePersonaje);

    console.log(PersonajeElegido);
    console.log(Existe);

    if(Existe === true)
    {
        alert("Genial! Elegiste la figura de " + PersonajeElegido.nombre);
        function CantidadALlevar(){
            let Cuantos = prompt("Cuantos " + PersonajeElegido.nombre + " va a llevar? Hay disponibles " + PersonajeElegido.cantidad + " y su precio es de " + PersonajeElegido.precio);
            if(Cuantos > PersonajeElegido.cantidad)
            {
                let NoHay = "No hay tantos " + PersonajeElegido.nombre + "!! Volve a intentar."
                alert(NoHay);
                CantidadALlevar();
            }
            else
            {
                let BuenaEleccion = "Perfecto!! Tus " + Cuantos + " " + PersonajeElegido.nombre + " ya estan en camino, el total es de " + (PersonajeElegido.precio * Cuantos);
                alert(BuenaEleccion);
            }
        }
        CantidadALlevar();
    } 
    else
    {
        let MalaEleccion = "Este producto no existe, volveras a comenzar el proceso, presta atencion a nuestros productos en stock";
        alert(MalaEleccion);
        ElegirProducto();
    }
}

ElegirProducto();










