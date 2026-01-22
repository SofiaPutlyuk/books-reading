import { postResume } from "../../../../redux/thunk/thunkResume"
import { StarResume } from "../starResume/StarResume"
import { useAppSelector, useAppDispatch } from "../../../../redux/hook"
import { useState } from "react"
import { BookListData } from "../../BookListStatus"
interface ModalResumeProps {
    book:BookListData,
    onClose:() => void
}
export const ModalResume = ({book, onClose}: ModalResumeProps) => {
    const info = useAppSelector((state) => state.resume.info)
     const resumeForBook = info.find(r => String(r.rating) === book._id)
    const [rating, setRating] = useState<number>(resumeForBook?.rating ?? 0)
    const [resumeText, setResumeText] = useState<string>(resumeForBook?.resume ?? "")
    const dispatch = useAppDispatch()
    return (
            <div className="backdrop">
                <div className="modalResume">
                    <div className="containerModal">
                        <p className="text-resume">Обрати рейтинг книги</p>
                        <StarResume rating={rating} onChange={(value) => {
                            setRating(value)
                            dispatch(postResume({bookId: book._id, rating:value, resume:resumeText}))
                            }} />
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault()
                            const form = e.currentTarget
                            const resume = (form.elements.namedItem("resume") as HTMLTextAreaElement).value
                            dispatch(postResume({ resume, rating }))
                            onClose()
                        }}>
                            <label>
                                <p className="text-resume">Резюме</p>
                                <textarea className="textarea-resume" name="resume" value={resumeText} onChange={(e) => setResumeText(e.target.value)}></textarea>
                            </label>
                            <div className="wrapperButtonResume">
                            <button onClick={onClose} type="button" className="btnBackResume">Назад</button>
                            <button  type="submit" className="btnSave">Зберегти</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}