import { LibraryIntention } from "./LibraryIntention"
import { useAppSelector } from "../../redux/hook"
export const LibraryIntentionPage = () => {
const info = useAppSelector((state) => state.book.info)
const intention = info.filter(b => b.status === "intention")
    return(
        <LibraryIntention lists={info} />
    )
}