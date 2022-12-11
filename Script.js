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
// function Figuras(nombre, precio, cantidad){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// const Figura01 = new Figuras("Goku Base", 5000, 15);
// const Figura02 = new Figuras("Homelander", 7500, 10);
// const Figura03 = new Figuras("Darth Vader", 10000, 8);
// const Figura04 = new Figuras("Superman", 10000, 20);
// const Figura05 = new Figuras("Batman", 5500, 5);

// const Productos = [];

// Productos.unshift(Figura01);
// Productos.push(Figura02);
// Productos.push(Figura03);
// Productos.push(Figura04);
// Productos.push(Figura05);

// console.log(Productos)

// const Nombres = Productos.map((Producto) => Producto.nombre);

// console.log(Nombres);

// function ElegirProducto() {

//     alert("Bienvenido a ActionStore! Nuestra lista de productos en stock es la siguiente: " + Nombres.join("   -   "));

//     let QuePersonaje = prompt("Elija que Figura va a llevar. Escriba el Nombre del personaje tal y como sale al principio");

//     const PersonajeElegido = Productos.find((Personaje) => Personaje.nombre === QuePersonaje);
//     const Existe = Productos.some((Personaje) => Personaje.nombre === QuePersonaje);

//     console.log(PersonajeElegido);
//     console.log(Existe);

//     if(Existe === true)
//     {
//         alert("Genial! Elegiste la figura de " + PersonajeElegido.nombre);
//         function CantidadALlevar(){
//             let Cuantos = prompt("Cuantos " + PersonajeElegido.nombre + " va a llevar? Hay disponibles " + PersonajeElegido.cantidad + " y su precio es de " + PersonajeElegido.precio);
//             if(Cuantos > PersonajeElegido.cantidad)
//             {
//                 let NoHay = "No hay tantos " + PersonajeElegido.nombre + "!! Volve a intentar."
//                 alert(NoHay);
//                 CantidadALlevar();
//             }
//             else
//             {
//                 let BuenaEleccion = "Perfecto!! Tus " + Cuantos + " " + PersonajeElegido.nombre + " ya estan en camino, el total es de " + (PersonajeElegido.precio * Cuantos);
//                 alert(BuenaEleccion);
//             }
//         }
//         CantidadALlevar();
//     } 
//     else
//     {
//         let MalaEleccion = "Este producto no existe, volveras a comenzar el proceso, presta atencion a nuestros productos en stock";
//         alert(MalaEleccion);
//         ElegirProducto();
//     }
// }

// ElegirProducto();





// CODIGO FINAL 


  

const ContentContainer = document.querySelector("#content-container");



Swal.fire({
    title: 'Ingresa tu Nombre',
    input: 'text',
    icon: 'question',
    confirmButtonText: 'Aceptar',
})
.then(resultado => {
    if (resultado.value) {
        let nombre = resultado.value;
        console.log(nombre);

     localStorage.setItem("Nombre", nombre);

       function Recibir(){

             const Bienvenido = document.createElement("div")
             Bienvenido.innerHTML = `
             <h1 class="bienvenida">Bienvenido ${nombre} !</h1>
             <h2 class="coso">Aquí podras encontrar las figuras de tus personajes favoritos!</h2>
            `;

            ContentContainer.append(Bienvenido);
       }

       Recibir();
    }
});





const Productos = []

class Figuras {
    constructor(id, nombre, precio, cantidad, imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
    }
}

const Figura01 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura02 = new Figuras ("goku_base", "Goku Base", 10000, 0, "https://i.pinimg.com/originals/c8/cd/88/c8cd8814dc4422d8d1165a57227b88ae.png")
const Figura03 = new Figuras ("homelander_rayos", "Homelander", 12000, 0, "https://necaonline.com/wp-content/uploads/2021/07/Homelander12-scaled.jpg")
const Figura04 = new Figuras ("batman_knifes", "Batman", 5000, 0, "https://http2.mlstatic.com/D_NQ_NP_635840-MLA47808929722_102021-O.jpg")
const Figura05 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura06 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura07 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura08 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura09 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura10 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura11 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")
const Figura12 = new Figuras ("darth_vader_mythos", "Darth Vader Mythos", 15000, 0, "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/596/products/darth-vader-mythos_star-wars_gallery_61e9e0a0ee0961-c8ed58c8f713f9a20716432196873078-640-0.jpg")

Productos.unshift(Figura01);
Productos.push(Figura02);
Productos.push(Figura03);
Productos.push(Figura04);
Productos.push(Figura05);
Productos.push(Figura06);
Productos.push(Figura07);
Productos.push(Figura08);
Productos.push(Figura09);
Productos.push(Figura10);
Productos.push(Figura11);
Productos.push(Figura12);

console.log(Productos);

const ProductContainer = document.querySelector(".product-container")
let botonAgregar = document.querySelectorAll(".figure-buy")
const CartContent = document.querySelector(".carrito-content")
const Carritoh3 = document.querySelector(".carrito-h3");


function AddProduct() {

    Productos.forEach (producto => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
          <img class="product-img" src= "${producto.imagen}" alt= "${producto.nombre}">
          <div class="product-stuff-container">
             <h4 class="figure-name">${producto.nombre}</h4>
             <p class="figure-price">$ ${producto.precio} AR$</p> 
             <button class="figure-buy" id="${producto.id}">Agregar</button>
          </div>
        `;

        ProductContainer.append(div);
    })

    ActualizarBotones();
    
}

AddProduct();

const ProductosJSON = JSON.stringify(Productos);
localStorage.setItem("Productos", ProductosJSON);

function ActualizarBotones() {
    botonAgregar = document.querySelectorAll(".figure-buy")

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", AddCart);
    })
}

const CartProducts = [];

function AddCart(e) {

    const idButton = e.currentTarget.id;
    const ProductIn = Productos.find(producto => producto.id === idButton);

    if(CartProducts.some(producto => producto.id === idButton)){
        const index = CartProducts.findIndex(producto => producto.id === idButton)
        CartProducts[index].cantidad++;

    }else{
        ProductIn.cantidad = 1;
        CartProducts.push(ProductIn);
    }

    InCart();
    console.log(CartProducts.length);
}

const CartProductsJSON = JSON.stringify(CartProducts);
localStorage.setItem("ProductosEnCarrito", CartProductsJSON);

console.log(CartProducts);


function CartLength(){
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            Carritoh3.classList.add("active");
        })
    })  
}

CartLength();

const CarritoProducto = document.querySelector(".carrito-producto");

const TotalPrice = document.querySelectorAll(".total-precio")


function InCart(){

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            CarritoProducto.innerHTML = ""
            CartProducts.find(thing => {
                const coso = document.createElement("div");
                coso.classList.add("thing");
                coso.innerHTML = `
                <p class="producto-en-numero">${CartProducts.indexOf(thing)}</p>
                <p class="producto-en-carrito">${thing.nombre}</p>
                <p class="producto-en-precio">$${thing.precio} AR$ </p>
                <p class="producto-en-cantidad">Cantidad: ${thing.cantidad}</p>
                <button class="boton-eliminar-producto" id="${thing.id}><i class="bi bi-trash"></i>Eliminar Producto</button>
                `;
        
                CarritoProducto.append(coso);
                console.log(thing.cantidad)
            })

            const Total = document.createElement("div");
            Total.classList.add("total-precio")
            Total.innerHTML = `
            <h4 class="total-compra">El total de tu compra es de: $${CartProducts.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)}</h4>
            <button class="boton-comprar">COMPRAR</button>
            `;
            
            CarritoProducto.append(Total);
        })
        
    })

    EliminarCarro();
}
let botonEliminar = document.querySelectorAll(".boton-eliminar-producto")


function EliminarCarro() {
    botonEliminar = document.querySelectorAll(".boton-eliminar-producto")

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", EliminadoDelCarro);
    })
}

function EliminadoDelCarro(e) {

    const idButton = e.currentTarget.id;
    const index = CartProducts.findIndex(producto => producto.id === idButton)
    
    CartProducts.splice(index, 1);
    InCart();
}

const BotonComprar = document.querySelector(".boton-comprar")

function CompraExitosa(){
    BotonComprar.addEventListener("click", () => {
        Swal.fire({
            title: 'Queres confirmar tu compra?',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
        }).then((result) => {
            if(result.isConfirmed){
                alert("Bien hecho, tu compra fue exitosa")
            }
            else{
                alert("tu compra fue rechazada")
            }
        })
    });
}


