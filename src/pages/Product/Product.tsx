import Single from "../../components/Single/Single"
import { singleProduct } from "../../data"
import "./Product.scss"

function Product() {
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product