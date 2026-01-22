import { DropZone } from "./dragDrop/DropZone"
import { useAppSelector } from "../../redux/hook"
import { BookList, BookListData } from "./BookListStatus"
import { ModalResume } from "./resume/modalResume/ModalResume"
import { useState } from "react"
export const LibraryPageStatus = () => {
    const info = useAppSelector((state) => state.book.info)
    const reading = info.filter(b => b.status === "reading")
    const finished = info.filter(b => b.status === "finished")
    const infoStatusBook = info.map(book => ({ ...book }))
    console.log(infoStatusBook)
    const [selectedBook, setSelectedBook] = useState<BookListData | null>(null)
    return (
        <>
            <DropZone title="Прочитано" status="finished" className="mainTitleIntention" />
            <BookList lists={finished} finished={true} onClickResume={(book) => setSelectedBook(book)} />
            {selectedBook && (
                <ModalResume
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            )}

            <DropZone title="Читаю" status="reading" className="mainTitleIntention" />
            <BookList lists={reading} onClickResume={(book) => setSelectedBook(book)} />
        </>
    )
}