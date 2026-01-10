import { LibraryInstructionStep } from "./LibraryInstructionStep"
import backIcon from "../../assets/svg/backIcon.svg"
import { useState } from "react"
import { useAppSelector,useAppDispatch } from "../../redux/hook"
import { postBook } from "../../redux/thunk/thunkBook"
import { useEffect } from "react"
export const LibraryPage = () => {
const [showInstruction, setShowInstruction] = useState(true)
const closeModal = () => {
    setShowInstruction(false)
}
const infoBook = useAppSelector(state => state.book.info)
const isSuccess = useAppSelector(state => state.book.isSuccess)
console.log(infoBook)
const dispatch = useAppDispatch()
useEffect(() => {
  if(isSuccess){
    setShowInstruction(false)
  }
})
    return(
        <div className="wrapperLibrary">
            <button className="btnBack"><img src={backIcon} alt="back-icon"/></button>
            <form className="formLibrary" onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const name = (form.elements.namedItem("name") as HTMLInputElement).value
            const author = (form.elements.namedItem("author") as HTMLInputElement).value
            const publish = Number((form.elements.namedItem("publish") as HTMLInputElement).value)
            const pageCount = Number((form.elements.namedItem("pageCount") as HTMLInputElement).value)
            dispatch(postBook({name,author,publish,pageCount}))
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
           {showInstruction && <LibraryInstructionStep closeModal={closeModal}/>}
        </div>
    )
}