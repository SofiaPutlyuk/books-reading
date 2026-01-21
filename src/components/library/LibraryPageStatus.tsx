import { DropZone } from "./dragDrop/DropZone"
import { useAppSelector } from "../../redux/hook"
import { BookList } from "./BookListStatus"
import { ModalResume } from "./resume/modalResume/ModalResume"
export const LibraryPageStatus = () => {
    const info = useAppSelector((state) => state.book.info)
    const reading = info.filter(b => b.status === "reading")
    const finished = info.filter(b => b.status === "finished")
    const infoStatusBook = info.map(book => ({ ...book }))
    console.log(infoStatusBook)
    return (
        <>
            <DropZone title="Прочитано" status="finished" className="mainTitleIntention" />
            <BookList lists={finished} />
            <ModalResume />
            <DropZone title="Читаю" status="reading" className="mainTitleIntention" />
            <BookList lists={reading} />
        </>
    )
}