let producto01 = "Figura Goku Base";
let producto02 = "Figura Homelander";

let PrecioProducto01 = 100;
let PrecioProducto02 = 200;

let TotalProductos = prompt("¿Cuantos productos va a llevar? Recuerde que no puede acumular mas de 5.")

function CantidadProductos(){

    if(TotalProductos > 5){
        let NoHay = "No es posible pedir " + TotalProductos + ", por favor ingrese otro valor."
        alert(NoHay);
        let NuevoValor = prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
        if(NuevoValor <= 5){
            let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor;
            alert(AhoraSi);
        }
        while (NuevoValor > 5){
            let NuevoValor= prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
            if(NuevoValor <= 5){
                let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor;
                alert(AhoraSi);
                break;
            }
        }
    }
    else{
        let SiHay = "Perfecto! Has elegido comprar " + TotalProductos;
        alert(SiHay);
    }
}

function ValorCompra(){
    let TotalProd01 = prompt("Cuantos " + producto01 + " vas a llevar? Su precio es de " + PrecioProducto01);
    TotalProd01 = Number(TotalProd01);

    if(TotalProd01 > 5){
        let TooMuch = "Son demasiados productos! Intentalo de nuevo"
        alert(TooMuch);
        while (TotalProd01 > 5){
            let NuevoValor = prompt("Ingrese otro valor. Recuerde que no puede acumular mas de 5.")
            NuevoValor = Number(NuevoValor);
            if(NuevoValor <= 5){
                let AhoraSi = "Perfecto! Has elegido comprar " + NuevoValor + " " + producto01 + ". El total de tu compra es de " + NuevoValor * PrecioProducto01;
                alert(AhoraSi);
                break;
            }
        }
    }
    else if(TotalProd01 == 5){
        let MaxProds = "Este es el maximo de productos, no podes añadir mas. Tu Compra se realizo con exito! El total es de " + TotalProd01 * PrecioProducto01;
        alert(MaxProds);
    }
    else{
        let TotalProd02 = prompt("Genial! Cuantos " + producto02 + " vas a llevar? Su precio es de " + producto02);
        TotalProd02 = Number(TotalProd02);

        if(TotalProd02 > 5 || TotalProd01 + TotalProd02 > 5){
            console.log(TotalProd01 + TotalProd02)
            let TooMuch = "Son demasiados productos! Intentalo de nuevo"
            alert(TooMuch);
        }
        else{

            let CompraExitosa = "Tu Compra se realizo con exito! El total es de " + (TotalProd01 * PrecioProducto01 + TotalProd02 * PrecioProducto02)
            alert(CompraExitosa);
        }
    }


}

CantidadProductos();
ValorCompra();

