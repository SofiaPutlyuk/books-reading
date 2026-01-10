import { LibraryInstructionStep } from "./LibraryInstructionStep"
import backIcon from "../../assets/svg/backIcon.svg"
import { useState } from "react"
export const LibraryPage = () => {
const [showInstruction, setShowInstruction] = useState(true)
const closeModal = () => {
    setShowInstruction(false)
}
    return(
        <div className="wrapperLibrary">
            <button className="btnBack"><img src={backIcon} alt="back-icon"/></button>
            <form className="formLibrary">
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
                    <input type="number" placeholder="..." name="year" className="inputAddBook"/>
                </label>
                <label>
                    Кількість сторінок
                    <input type="number" placeholder="..." name="page" className="inputAddBook"/>
                </label>
                </div>
                <button className="btnAddBook">Додати</button>
            </form>
           {showInstruction && <LibraryInstructionStep closeModal={closeModal}/>}
        </div>
    )
}