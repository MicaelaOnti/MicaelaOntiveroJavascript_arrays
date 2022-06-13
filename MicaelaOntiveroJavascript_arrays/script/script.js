
/*constructor productos*/
class producto  {
    constructor(modelo, precio, talle) {
        this.modelo = modelo
        this.precio = precio
        this.talle = talle 
    }
}
/*productos (modelos)*/

const producto1 = new producto("Ariel","$5000" ,[36,37,38,39] );
const producto2 = new producto("Orsola","$4500",[36,37,38,39] );
const producto3 = new producto("Nacar","$4500" ,[36,37,38,39] );
const producto4 = new producto("Dita","$5600" ,[36,37,38,39] );
const producto5 = new producto("Bombon","$4250" ,[36,37,38,39] );
const producto6 = new producto("Moni","$4100" ,[36,37,38,39] );

const productos = [];

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)

console.log(producto1)

/*dar info del producto elejido */
function infoProductos (){
  alert('elija un modelo de los siguientes: Ariel - Orsola - Nacar - Dita - Bombon - Moni')
  let modelo = prompt('ingrese el modelo elejido.')
  if (modelo ==='') {
    alert("modelo no ingresado");
   }
  if (modelo === "Ariel") {
    alert('Zapato Ariel '+ 'precio: '+ producto1.precio + ' talles disponibles: 36 al 39' );
   }
  else if (modelo === "Orsola") {
    alert('Zapato Orsola '+ 'precio: '+ producto2.precio + ' talles disponibles: 36 al 39' );
   }
  else if (modelo === "Nacar") {
    alert('Zapato Nacar '+ 'precio: '+ producto3.precio + ' talles disponibles: 36 al 39' );
   }
  else if (modelo === "Dita") {
    alert('Zapato Dita '+ 'precio: '+ producto4.precio + ' talles disponibles: 36 al 39' );
   } 
  else if (modelo === "Bombon") {
    alert('Zapato Bombon '+ 'precio: '+ producto5.precio + ' talles disponibles: 36 al 39' );
   }
  else if (modelo === "Moni") {
    alert('Zapato Moni '+ 'precio: '+ producto6.precio + ' talles disponibles: 36 al 39' );
   }
  else{
    alert("error al encontrar el producto")
   }
}

infoProductos();
