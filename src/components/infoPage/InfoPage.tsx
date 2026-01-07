import { Header } from "../header/Header"
import arrowInfo from "../../assets/svg/arrowInfo.svg"
const optionHelpYou: string[] = ["Швидше сформулювати свою ціль і розпочати читати", "Пропорційно розподілити навантаження на кожний день", "Відстежувати особистий успіх"]
const optionYouCan: string[] = ["Формувати особисту думку незалежну від інших", "Підвищити свої професійні якості опираючись на нові знання", "Стати цікавим співрозмовником"]
export const InfoPage = () => {
    return (
        <>
            <Header />
            <div className="containerInfo">
                <p className="titleInfo">Books Reading</p>
                <div style={{marginLeft:20, display:"flex", flexDirection:"column", gap:20}}>
                <p className="titleOption">Допоможе вам</p>
                {optionHelpYou.map((text) => (
                    <div className="containerOption">
                        <img src={arrowInfo} alt="arrowInfo" />
                        <p className="textOption">{text}</p>
                    </div>
                ))}
                <p className="titleOption">Також ви зможете</p>
                {optionYouCan.map((text) => (
                    <div className="containerOption">
                        <img src={arrowInfo} alt="arrowInfo" />
                        <p className="textOption">{text}</p>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}