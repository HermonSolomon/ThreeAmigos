import React, { Component } from "react";
import {
 storeProducts,
 detailProduct,
 blogArticle,
 BlogDetail,
 carouselData,
 slideDetail
} from "./data";

const AppContext = React.createContext();

class AppProvider extends Component {
 state = {
  products: [],
  cart: [],
  blogArticle: [],
  carouselData: [],
  slideDetail: slideDetail,
  blogDetails: BlogDetail,
  detailProduct: detailProduct,
  modalOpen: false,
  modalProduct: detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  currentIndex: 0,
  translateValue: 0
 };

 componentDidMount() {
  this.setProducts();
  this.setblogArticle();
  this.setCarouselSlider();
 }

 setProducts = () => {
  let tempProducts = [];
  storeProducts.forEach(item => {
   //unpacks the values into a single product from the array of storeProduct list data
   const singleItem = {
    ...item
   };
   tempProducts = [...tempProducts, singleItem];
  });
  this.setState(() => {
   return {
    products: tempProducts
   };
  });
 };

 // getItem retrives the right product from products according to thier id's as a utility method from data.js.
 getItem = id => {
  const product = this.state.products.find(item => item.id === id);
  return product;
 };

 // Handles each product clicked according to thier id's to display in details page
 handleDetail = id => {
  const product = this.getItem(id);
  this.setState(() => {
   return {
    detailProduct: product
   };
  });
 };

 setblogArticle = () => {
  let tempArticles = [];
  blogArticle.forEach(item => {
   const singleItem = {
    ...item
   };
   tempArticles = [...tempArticles, singleItem];
  });
  this.setState(() => {
   return {
    blogArticle: tempArticles
   };
  });
 };

 // get BlogArticle
 getBlogArticle = id => {
  const article = this.state.blogArticle.find(item => item.id === id);
  // console.log(article);
  return article;
 };

 handleBlogDetail = id => {
  const article = this.getBlogArticle(id);
  this.setState(() => {
   return { blogDetails: article };
  });
 };

 setCarouselSlider = () => {
  let tempSlides = [];
  carouselData.forEach(item => {
   const singleItem = {
    ...item
   };
   tempSlides = [...tempSlides, singleItem];
  });
  this.setState(() => {
   return {
    carouselData: tempSlides
   };
  });
 };

 getSlide = id => {
  const slide = this.state.carouselData.find(item => item.id === id);
  console.log(slide);
  return slide;
 };

 handleSlideDetail = id => {
  const slide = this.getSlide(id);
  console.log("slide was clicked" + id);
  this.setState(() => {
   return {
    slideDetail: slide
   };
  });
 };

 addToCart = id => {
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getItem(id));
  const product = tempProducts[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;

  this.setState(
   () => {
    return {
     products: tempProducts,
     cart: [...this.state.cart, product]
    };
   },
   () => {
    this.addTotal(); // through this callback function each time we add items to our cart the values for cartSubTotal, cartTax, cartTotal will update dynamically
   }
  );
 };

 openModal = id => {
  const product = this.getItem(id);
  this.setState(() => {
   return {
    modalProduct: product,
    modalOpen: true
   };
  });
 };

 closeModal = () => {
  this.setState(() => {
   return {
    modalOpen: false
   };
  });
 };

 incrementCart = id => {
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(
   () => {
    return {
     cart: [...tempCart]
    };
   },
   () => {
    this.addTotal();
   }
  );
 };
 decrementCart = id => {
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count - 1;

  if (product.count === 0) {
   this.removeItem(id);
  } else {
   product.total = product.count * product.price;
   this.setState(
    () => {
     return {
      cart: [...tempCart]
     };
    },
    () => {
     this.addTotal();
    }
   );
  }
 };

 removeItem = id => {
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];

  const index = tempProducts.indexOf(this.getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;

  tempCart = tempCart.filter(item => item.id !== id);

  this.setState(
   () => {
    return {
     cart: [...tempCart],
     products: [...tempProducts]
    };
   },
   () => {
    this.addTotal();
   }
  );
 };

 clearCart = () => {
  this.setState(
   () => {
    return {
     cart: []
    };
   },
   () => {
    // N.B. callback function
    this.setProducts();
    this.addTotal();
   }
  );
 };

 addTotal = () => {
  let subTotal = 0;
  this.state.cart.map(item => (subTotal += item.total));

  const tempTax = subTotal * 0.1; // tax 0.1 === 10%
  const tax = parseFloat(tempTax.toFixed(2));
  const total = Math.round(subTotal + tax);
  this.setState(() => {
   return {
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
   };
  });
 };

 render() {
  return (
   <AppContext.Provider
    value={{
     ...this.state,
     handleDetail: this.handleDetail,
     handleBlogDetail: this.handleBlogDetail,
     handleSlideDetail: this.handleSlideDetail,
     addToCart: this.addToCart,
     openModal: this.openModal,
     closeModal: this.closeModal,
     incrementCart: this.incrementCart,
     decrementCart: this.decrementCart,
     removeItem: this.removeItem,
     clearCart: this.clearCart,
     currentIndex: this.currentIndex,
     translateValue: this.translateValue
    }}
   >
    {this.props.children}
   </AppContext.Provider>
  );
 }
}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer };

// tester = () => {
//  console.log('State Products:', this.state.products[0].inCart);
//  console.log('Data Products:', storeProducts[0].inCart);

//  const tempProducts = [...this.state.products];
//  tempProducts[0].inCart = true
//  this.setState(() => {
//   return {products:tempProducts}
//  },() => {
//  console.log('State Products: ', this.state.products[0].inCart);
//  console.log('Data Products: ', storeProducts[0].inCart);
//  })
// }
