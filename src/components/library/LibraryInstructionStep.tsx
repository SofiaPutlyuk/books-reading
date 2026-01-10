import readIcon from "../../assets/svg/readIcon.svg"
import flagIcon from "../../assets/svg/flagIcon.svg"
import vectorIcon from "../../assets/svg/vectorIcon.svg"
interface instruction {
    step: string,
    icon: string,
    alt: string,
    subtitle: string,
    description: string
}
const instructionData: instruction[] = [
    { step: "Крок 1.", icon: readIcon, alt: "read-icon", subtitle: "Створіть особисту бібліотеку", description: "Додайте до неї книжки, які маєте намір прочитати." },
    { step: "Крок 2.", icon: flagIcon, alt: "flag-icon", subtitle: "Сформуйте своє перше тренування", description: "Визначте ціль, оберіть період, розпочинайте тренування." }
]
type Props = {
    closeModal:() => void
}
export const LibraryInstructionStep = ({closeModal}:Props) => {
    return (
        <div className="overlay-instruction" onClick={(e) => e.stopPropagation()}>
        <div className="wrapperInstruction">
            {instructionData.map((elem) => (
                <>
                    <p className="text-step">{elem.step}</p>
                    <div className="wrapperSubtitle">
                        <img src={elem.icon} alt={elem.alt} />
                        <p className="text-subtitle">{elem.subtitle}</p>
                    </div>
                    <div className="wrapperSubtitle" style={{marginLeft:27}}>
                        <img src={vectorIcon} alt="vector-icon" />
                        <p className="text-instructionDescription">{elem.description}</p>
                    </div>
                </>
            ))}
            <button className="btn-instruction" onClick={closeModal}>Ok</button>
        </div>
        </div>
    )
}