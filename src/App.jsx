import ProductList from './components/ProductList'
function App() {

  var products = [
    {id: 1, name: "product 1", price: 5000, color: "red"},
    {id: 2, name: "product 2", price: 6500, color: "black"},
    {id: 3, name: "product 3", price: 7000, color: "red"},
    {id: 4, name: "product 4", price: 4000, color: "blue"},
  ]

  return (
    <>   
      <ProductList data={products} />
    </>
  )
}

export default App
