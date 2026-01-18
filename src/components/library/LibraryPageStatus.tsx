import { DropZone } from "./dragDrop/DropZone"
import { useAppSelector } from "../../redux/hook"
export const LibraryPageStatus = () => {
const info = useAppSelector((state) => state.book.info)
const reading = info.filter(b => b.status === "reading")
const finished = info.filter(b => b.status === "finished")
    return(
        <>
        <DropZone title="Прочитано" status="finished" className="mainTitleIntention"/>
        {reading.map(b => <div key={b.name}>{b.name}</div>)}
        <DropZone title="Читаю" status="reading" className="mainTitleIntention"/>
         {finished.map(b => <div key={b.name}>{b.name}</div>)}
        </>
    )
}