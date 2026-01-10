import readIcon from "../../assets/svg/readIcon.svg"
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
    return (
        <>
            <p>Маю намір прочитати</p>
            {lists.length === 0 ?
                <p>Список порожній</p>
                : (lists.map((elem) => (
                    <div className="wrapperIntention">
                        <div className="wrapperTitle">
                            <img src={readIcon} alt="read-icon" />
                            <p className="title-intention">{elem.name}</p>
                        </div>
                        <div className="wrapperDescription">
                            <p>Автор:{elem.author}</p>
                            <p>Рік:{elem.publish}</p>
                            <p>Стор.:{elem.pageCount}</p>
                        </div>
                    </div>
                )))}
        </>
    )
}