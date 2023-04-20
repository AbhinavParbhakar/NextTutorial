import { useRouter } from "next/router"

export default function Review(){
    const router = useRouter()
    const path = router.asPath
    return(
        <h1>{path}</h1>
    )
}