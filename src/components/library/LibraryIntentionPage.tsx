import { LibraryIntention } from "./LibraryIntention"
import { useAppSelector } from "../../redux/hook"
export const LibraryIntentionPage = () => {
const info = useAppSelector((state) => state.book.info)
    return(
        <LibraryIntention lists={info} />
    )
}