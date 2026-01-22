import readIcon from "../../assets/svg/readIcon.svg"
import { StarResume } from "./resume/starResume/StarResume"
export type BookListData = {
    _id?: string,
    name: string,
    author: string,
    publish: number,
    pageCount: number,
    rating?:number
}
type BookProps = {
    lists: BookListData[],
    finished?:boolean,
    onClickResume?:(book:BookListData) => void
}
export const BookList = ({ lists, finished, onClickResume }: BookProps) => {
    return (
        <>
            <div className={`intentionHeader ${finished ? "finishedHeader" : ""}`}>
                <span className="headerCell">Назва книги</span>
                <span className="headerCell">Автор</span>
                <span className="headerCell">Рік</span>
                <span className="headerCell">Стор.</span>
                {finished && (
                    <span className="headerCell">Рейтинг</span>
                )}
            </div>
            {lists.map((book, index) => (
                <div key={index} className="wrapperIntention bookItem" draggable>
                    <div className="wrapperTitle">
                        <img src={readIcon} alt="read-icon" />
                        <p className={`title-intention ${finished ? "finishedTitleIntention" : ""}`}>{book.name}</p>
                    </div>
                    <div className={`wrapperDescription ${finished ? "wrapperDescriptionFinished" : ""}`}>
                        <span className="subtitle-intention">Автор:</span><span className="info-intention">{book.author}</span>
                        <span className="subtitle-intention">Рік:</span><span className="info-intention">{book.publish}</span>
                        <span className="subtitle-intention">Стор.:</span><span className="info-intention">{book.pageCount}</span>
                      
                      {finished && onClickResume && (
                        <>
                        <StarResume rating={book.rating ?? 0} onChange={(value) => book.rating = value}/>
                      <button onClick={() => onClickResume(book)} className="btnResume">Резюме</button>
                        </>
                    )}
                    </div>
                </div>
            ))}
        </>
    )
}