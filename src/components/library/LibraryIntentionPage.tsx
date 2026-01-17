import { LibraryIntention } from "./LibraryIntention"
import { useAppSelector } from "../../redux/hook"
export const LibraryIntentionPage = () => {
const info = useAppSelector((state) => state.book.info)
const intention = info.filter(b => b.status === "intention")
const reading = info.filter(b => b.status === "reading")
const finished = info.filter(b => b.status === "finished")
    return(
        <LibraryIntention lists={info} />
    )
}