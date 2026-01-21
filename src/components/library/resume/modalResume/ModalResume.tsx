import { postResume } from "../../../../redux/thunk/thunkResume"
import { StarResume } from "../starResume/StarResume"
import { useAppSelector, useAppDispatch } from "../../../../redux/hook"
import { useState } from "react"
export const ModalResume = () => {
    const info = useAppSelector((state) => state.resume.info)
    console.log(info)
    const initialRating = info[0]?.rating ?? 0
    const [rating, setRating] = useState<number>(initialRating)
    const dispatch = useAppDispatch()
    const [show, setShow] = useState<boolean>(true)
    const onClose = () => setShow(false)
    if (!show) return null;
    return (
            <div className="backdrop">
                <div className="modalResume">
                    <div className="containerModal">
                        <p className="text-resume">Обрати рейтинг книги</p>
                        <StarResume rating={rating} onChange={setRating} />
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault()
                            const form = e.currentTarget
                            const resume = (form.elements.namedItem("resume") as HTMLTextAreaElement).value
                            dispatch(postResume({ resume, rating }))
                            onClose()
                        }}>
                            <label>
                                <p className="text-resume">Резюме</p>
                                <textarea className="textarea-resume" name="resume"></textarea>
                            </label>
                            <button onClick={onClose} type="button">Зберегти</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}