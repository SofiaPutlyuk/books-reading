import readIcon from "../../assets/svg/readIcon.svg"
import { useNavigate } from "react-router-dom"
type ListIntention = {
    name: string,
    author: string,
    publish: number,
    pageCount: number
}
type LibraryLntentionProps = {
    lists: ListIntention[]
}
export const LibraryIntention = ({ lists = [] }: LibraryLntentionProps) => {
const navigate = useNavigate()
    return (
        <div className="mainWrapperIntention">
            <p className="mainTitleIntention">Маю намір прочитати</p>
            <div className="intentionHeader">
                <span className="headerCell">Назва книги</span>
                <span className="headerCell">Автор</span>
                <span className="headerCell">Рік</span>
                <span className="headerCell">Стор.</span>
            </div>
            {lists.length === 0 ?
                <p className="text-empty">Список порожній</p>
                : (lists.map((elem) => (
                    <div className="wrapperIntention"
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData("bookName", elem.name)
                        e.dataTransfer.setData("bookAuthor", elem.author)
                    }}
                    >
                        <div className="wrapperTitle">
                            <img src={readIcon} alt="read-icon" />
                            <p className="title-intention">{elem.name}</p>
                        </div>
                        <div className="wrapperDescription">
                            <span className="subtitle-intention">Автор:</span><span className="info-intention">{elem.author}</span>
                            <span className="subtitle-intention">Рік:</span><span className="info-intention">{elem.publish}</span>
                            <span className="subtitle-intention">Стор.:</span><span className="info-intention">{elem.pageCount}</span>
                        </div>
                    </div>
                )))}
                <div className="btnWrapperIntention">
                <button className="btnNewIntention" onClick={() => navigate("/library")}>+</button>
                <button className="btnNext" onClick={() => navigate("/library/status")}>Далі</button>
                </div>
        </div>
    )
}