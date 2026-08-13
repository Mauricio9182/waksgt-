/**
 * products.js
 * -----------
 * Catálogo de Waks_gt. Este es el ÚNICO archivo que hay que tocar
 * para actualizar inventario: agregar, quitar o editar sabores.
 *
 * No hace falta tocar index.html ni el CSS para cambiar productos.
 *
 * Para agregar un producto nuevo: copiá un objeto completo (desde la
 * llave { hasta la }), pegalo antes del ]; final, y editá los valores.
 *
 * Campos:
 *  id      -> identificador único, sin espacios (se usa internamente)
 *  name    -> nombre que se muestra
 *  tag     -> etiqueta corta arriba del nombre (ej: "Refrescante")
 *  image   -> nombre del archivo de la foto (debe estar en esta misma carpeta)
 *  specs   -> lista de características (podés agregar o quitar líneas)
 *  price   -> precio en quetzales, solo el número
 *  accent  -> color de acento en hexadecimal para esa tarjeta
 *  active  -> true = se muestra en la tienda, false = se oculta (sin borrarlo)
 */

const PRODUCTS = [
  {
    id: "watermelon-chill",
    name: "Watermelon Chill",
    tag: "Refrescante",
    image: "Watermelon_Chill.jpeg",
    specs: ["3500 puffs", "5% nicotina", "Sabor sandía helada"],
    price: 100,
    accent: "#ff5c7a",
    active: true
  },
  {
    id: "blueberry-splash",
    name: "Blueberry Splash",
    tag: "Intenso",
    image: "Blueberry_Splash.jpeg",
    specs: ["3500 puffs", "5% nicotina", "Sabor mora azul"],
    price: 100,
    accent: "#5b6ef5",
    active: true
  }
];
