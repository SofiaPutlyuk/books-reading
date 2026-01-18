import { LibraryInstructionStep } from "./LibraryInstructionStep"
import backIcon from "../../assets/svg/backIcon.svg"
import { useState } from "react"
import { useAppSelector,useAppDispatch } from "../../redux/hook"
import { postBook } from "../../redux/thunk/thunkBook"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { resetBookStatus,bookData } from "../../redux/slice/bookSlice"
import { LibraryIntentionPage } from "./LibraryIntentionPage"
import { LibraryPageStatus } from "./LibraryPageStatus"
export const LibraryPage = () => {
const [showInstruction, setShowInstruction] = useState(true)
const location = useLocation()
const isShowStatus = location.pathname === "/library/status"
const closeModal = () => {
    setShowInstruction(false)
}
const isBook = useAppSelector((state) => state.book.info) 
const isSuccess = useAppSelector(state => state.book.isSuccess)
const dispatch = useAppDispatch()
const navigate = useNavigate()
useEffect(() => {
  if(isSuccess){
    setShowInstruction(false)
    navigate("/library/intention")
    dispatch(resetBookStatus())
  }
})
    return(
        <div className="wrapperLibrary">
            <button className="btnBack" onClick={() => navigate("/library/intention")}><img src={backIcon} alt="back-icon"/></button>
            <form className="formLibrary" onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const name = (form.elements.namedItem("name") as HTMLInputElement).value
            const author = (form.elements.namedItem("author") as HTMLInputElement).value
            const publish = Number((form.elements.namedItem("publish") as HTMLInputElement).value)
            const pageCount = Number((form.elements.namedItem("pageCount") as HTMLInputElement).value)
            const newBook: bookData = {name,author,publish,pageCount,status:"intention"}
            dispatch(postBook(newBook))
            }}>
                <label>
                    Назва книги
                    <input type="text" placeholder="..." name="name" className="inputAddBook"/>
                </label>
                <div >
                <label>
                    Автор книги
                    <input type="text" placeholder="..." name="author" className="inputAddBook"/>
                </label>
                <label>
                    Рік випуску
                    <input type="number" placeholder="..." name="publish" className="inputAddBook"/>
                </label>
                <label>
                    Кількість сторінок
                    <input type="number" placeholder="..." name="pageCount" className="inputAddBook"/>
                </label>
                </div>
                <button className="btnAddBook" type="submit">Додати</button>
            </form>
            <div className="library-intention">
            {isShowStatus && <LibraryPageStatus />}
            <LibraryIntentionPage />
            </div>
           {isBook.length === 0 && showInstruction && <LibraryInstructionStep closeModal={closeModal}/>}
        </div>
    )
}