import { Star } from "./Star"
import { useState } from "react"
interface PropsRating {
    rating: number | null,
    onChange: (value: number) => void
}
export const StarResume = ({ rating , onChange }: PropsRating) => {
    const [hover, setHover] = useState<number | null>(null)
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                const active = (hover ?? rating ?? 0) >= star
                return (
                    <button key={star} onClick={() => onChange(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(null)} className="btnStar">
                        <Star active={active} />
                    </button>
                )
            })}
        </div>
    )
}