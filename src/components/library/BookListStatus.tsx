import readIcon from "../../assets/svg/readIcon.svg"
type BookList = {
    name: string,
    author: string,
    publish: number,
    pageCount: number
}
type BookProps = {
    lists: BookList[]
}
export const BookList = ({ lists }: BookProps) => {
    return (
        <>
            <div className="intentionHeader">
                <span className="headerCell">Назва книги</span>
                <span className="headerCell">Автор</span>
                <span className="headerCell">Рік</span>
                <span className="headerCell">Стор.</span>
            </div>
            {lists.map((book, index) => (
                <div key={index} className="wrapperIntention bookItem" draggable>
                    <div className="wrapperTitle">
                        <img src={readIcon} alt="read-icon" />
                        <p className="title-intention">{book.name}</p>
                    </div>
                    <div className="wrapperDescription">
                        <span className="subtitle-intention">Автор:</span><span className="info-intention">{book.author}</span>
                        <span className="subtitle-intention">Рік:</span><span className="info-intention">{book.publish}</span>
                        <span className="subtitle-intention">Стор.:</span><span className="info-intention">{book.pageCount}</span>
                    </div>
                </div>
            ))}
        </>
    )
}