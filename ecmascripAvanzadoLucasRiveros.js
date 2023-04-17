class ProductManager {
    // inicializo el id en 1
    id = 1;
  
    constructor() {
      // el producto esta vacio
      this.products = [];
    }
    //llamo al metodo addProduct y checkeamos el codigo
    addProduct(product) {
      let checkCode = this.products.find((p) => p.code === product.code);
      if (checkCode) {
        throw new Error('El codigo ya existe');
      }
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        throw new Error('faltan campos por completar');
      }
      //creamos el producto e incrementamos el ID
      let newProduct = { ...product, id: this.id };
      this.products.push(newProduct);
      this.id++;
      return 'Producto agregado';
    }
    // llamo al metodo getProduct
    getProducts() {
      return this.products;
    }
    // llamo al metodo getProductById
    getProductById(id) {
      let found = this.products.find((p) => p.id === id);
      if (!found) {
        return 'no se encontro el producto';
      }
      return found;
    }
  }
  
  const product = {
    title:"producto prueba",
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail:
      'Sin imagen',
    code: 'abc123',
    stock: 20,
  };
  const product2 = {
    title:"producto prueba",
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail:
      'Sin imagen',
    code: 'abc123',
    stock: 20,
  };
  
  const productManager = new ProductManager();
  
  console.log(productManager.addProduct(product));
  // Para que verifique si existe o no el codigo  
  //console.log(productManager.addProduct(product2));
  
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(4));