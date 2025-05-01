document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll(".tarjeta-producto");
    const ordenAscBtn = document.getElementById("orden-asc");
    const ordenDescBtn = document.getElementById("orden-desc");
    const filtroCategoria = document.getElementById("filtro-categoria");
  
    // Ordenar productos por precio
    ordenAscBtn.addEventListener("click", () => ordenarProductos("asc"));
    ordenDescBtn.addEventListener("click", () => ordenarProductos("desc"));
  
   
  
    function ordenarProductos(orden) {
      const contenedor = document.querySelector(".row.mt-5");
      const productosArray = Array.from(productos);
  
      productosArray.sort((a, b) => {
        const precioA = parseFloat(a.querySelector(".card-text strong").textContent.replace("$", ""));
        const precioB = parseFloat(b.querySelector(".card-text strong").textContent.replace("$", ""));
        return orden === "asc" ? precioA - precioB : precioB - precioA;
      });
  
      // Reordenar los productos en el DOM
      productosArray.forEach((producto) => contenedor.appendChild(producto));
    }
  
    
  });