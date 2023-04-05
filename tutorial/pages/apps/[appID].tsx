import { useRouter } from "next/router"

export default function appDetails(){
    const router = useRouter()
    const PID = router.query
    return(
        <>
        <h1>Page id: {PID.appID}</h1>
        </>
    )
}