import { useRouter } from "next/router"


const Product = () => {
    const router = useRouter()
  return (
    <div>Product Details {router.query.prodId}</div>
  )
}

export default Product