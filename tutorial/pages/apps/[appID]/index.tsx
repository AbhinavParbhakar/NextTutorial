import Link from "next/link"
import { useRouter } from "next/router"

export default function appDetails(){
    const router = useRouter()
    const query = router.query
    const path = router.asPath
    const reviewPath = path.concat("/review")
    
    return(
        <>
        <h1>Page id: {query.appID}</h1>
        <Link href={reviewPath}>review</Link>
        </>
    )
}