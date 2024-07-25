import { useRouter } from "next/router"


const Category = () => {
    const router = useRouter()
   
  return (
    <div>Category Page {router.query.category}</div>
  )
}

export default Category