import {useNavigate} from "react-router-dom";
import arrowInfo from "../../assets/svg/arrowInfo.svg"
const optionHelpYou: string[] = ["Швидше сформулювати свою ціль і розпочати читати", "Пропорційно розподілити навантаження на кожний день", "Відстежувати особистий успіх"]
const optionYouCan: string[] = ["Формувати особисту думку незалежну від інших", "Підвищити свої професійні якості опираючись на нові знання", "Стати цікавим співрозмовником"]
export const InfoPage = () => {
const navigate = useNavigate()
    return (
        <>
            <div className="containerInfo">
                <p className="titleInfo">Books Reading</p>
                <div className="wrapperTextOption">
                    <p className="titleOption">Допоможе вам</p>
                    {optionHelpYou.map((text, index) => (
                        <div className="containerOption" key={index}>
                            <img src={arrowInfo} alt="arrowInfo" />
                            <p className="textOption">{text}</p>
                        </div>
                    ))}
                    <p className="titleOption">Також ви зможете</p>
                    {optionYouCan.map((text,index) => (
                        <div className="containerOption" key={index}>
                            <img src={arrowInfo} alt="arrowInfo" />
                            <p className="textOption">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="wrapperButton">
                    <button className="btnOptionLog" onClick={() => navigate("/sign-up")}>Увійти</button>
                    <button className="btnOptionSign">Реєстрація</button>
                </div>
            </div>
        </>
    )
}