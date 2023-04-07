import Link from "next/link"

export default function Home(){
    return (
        <div className="text-3xl font-bold underline">
        <h1>This is the home page</h1>
        <h2><Link href="/users" className="text-blue-300">Users</Link></h2>
        </div>
    )
}
