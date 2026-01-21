import { BookStatus, updateBookStatus } from "../../../redux/slice/bookSlice"
import { useDispatch } from "react-redux"
type DropZoneProps = {
    title:string,
    status:BookStatus,
    className?:string
}
export const DropZone = ({title,status,className}:DropZoneProps) => {
 const dispatch = useDispatch()
 const handleDrop = async (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const name = e.dataTransfer.getData("bookName")
        const author = e.dataTransfer.getData("bookAuthor")
        dispatch(updateBookStatus({name,author,status}))
        await fetch("http://localhost:5001/api/book", {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name, author, status})
        })
 }
  return(
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className={`dropZone ${className ?? ""}`}>
        <p>{title}</p>
    </div>
 )
}

