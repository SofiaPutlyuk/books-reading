import { DropZone } from "./dragDrop/DropZone"
import { useAppSelector } from "../../redux/hook"
import readIcon from "../../assets/svg/readIcon.svg"
export const LibraryPageStatus = () => {
    const info = useAppSelector((state) => state.book.info)
    const reading = info.filter(b => b.status === "reading")
    const finished = info.filter(b => b.status === "finished")
    const infoReading = reading.map(r => r)
    console.log(infoReading)
    return (
        <>
            <DropZone title="Прочитано" status="finished" className="mainTitleIntention" />
            {reading.map(b => <div key={b.name} className="wrapperIntention">  <div className="wrapperTitle">
                <img src={readIcon} alt="read-icon" />
                <p className="title-intention">{b.name}</p>
            </div></div>)}
            <DropZone title="Читаю" status="reading" className="mainTitleIntention" />
            {finished.map(b => <div key={b.name}>{b.name}</div>)}
        </>
    )
}