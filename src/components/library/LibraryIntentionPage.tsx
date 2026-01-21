import { LibraryIntention } from "./LibraryIntention"
import { useAppSelector } from "../../redux/hook"
export const LibraryIntentionPage = () => {
const info = useAppSelector((state) => state.book.info)
console.log(info)
const intention = info.filter(b => b.status === "intention")
console.log(intention)
    return(
        <LibraryIntention lists={intention} />
    )
}