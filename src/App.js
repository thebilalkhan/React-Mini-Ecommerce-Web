import Catagory from './catagory';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [catagories, setCatagories] = useState([]);
  let [myproducts, setMyproducts] = useState([]);
  let [catProducts, setCatProducts] = useState('')

  let getCatagory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((resolve) => resolve.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setCatagories(finalRes)
      })

  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);    
        setMyproducts(finalRes.products);


      })
  }



  useEffect(() => {
    getCatagory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catProducts !== "") {
      axios.get(`https://dummyjson.com/products/category/${catProducts}`)
        .then((res) => res.data)
        .then((finalRes) => {
          // console.log(finalRes);    
          setMyproducts(finalRes.products);
        })

    }}, [catProducts]);




  let pitems = myproducts.map((items, index) => {
    return (
      <ProductItems key={index} items={items} />
    )
  })



  return (
    <div className="container">
      <div>  <h2 className='title'>Mini Ecommerce Website Using Api</h2>  </div>
      <div className='subContainer'>

        <div>

          <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Products Catagory</h2>

          <Catagory catagories={catagories} setCatProducts={setCatProducts} />

        </div>

        <div className='productItems'>
          {
            (myproducts.length >= 1) ?

              pitems

              :

              'No Data Found'

          }


        </div>

      </div>

    </div>
  );
}

export default App;


let ProductItems = ({ items }) => {
  return (
    <div className="product-item">
      <img width={"100%"} src={items.thumbnail} style={{ maxHeight: '200px' }} />
      <div>{items.title}</div>
      <div>{items.price}$</div>
    </div>
  )
}
