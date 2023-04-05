import Link from "next/link";

export default function Apps(){
    return (
        <>
            <h1>App list</h1>
            <div className="flex flex-col">
            <Link href={"apps/1"}>App 1</Link>
            <Link href={"apps/2"}>App 2</Link>
            <Link href={"apps/3"}>App 3</Link>
            <Link href={"apps/4"}>App 4</Link>
            </div>
        </>
    )
}