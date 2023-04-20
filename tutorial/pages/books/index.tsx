import Link from "next/link"

export default function Books(){
    return(
        <div className="flex-col w-40 border-red-500">
            <h1 className="">Find books here</h1>
            <ul className="float-right">
                <li><Link href="books/harryPotter">Harry Potter</Link></li>
                <li><Link href="books/red">Red</Link></li>
            </ul>
        </div>
    )
}