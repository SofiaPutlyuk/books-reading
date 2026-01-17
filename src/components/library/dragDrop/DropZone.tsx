import { BookStatus } from "../../../redux/slice/bookSlice"
import { useDispatch } from "react-redux"
type DropZoneProps = {
    title:string,
    status:BookStatus
}
export const DropZone = () => {
 const dispatch = useDispatch()
 return(
    <div>
        
    </div>
 )
}