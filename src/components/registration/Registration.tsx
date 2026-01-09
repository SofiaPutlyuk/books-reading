import { InfoPage } from "../infoPage/InfoPage"
import googleIcon from "../../assets/svg/googleIcon.svg"
import { postRegistrationUser } from "../../redux/thunk/thunkRegistration"
import {useSelector , useDispatch} from "react-redux"
// import { RootState, AppDispatch } from "../../redux/store"
import { useNavigate } from "react-router-dom"
export const Registration = () => {
// const info = useSelector((state:RootState) => state.registration.info)
const navigate = useNavigate()
// console.log(info)
// const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="wrapperElement">
            <div className="wrapperRegistration">
                <div className="wrapperLayout">
                    <form className="formRegistration" onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
                     e.preventDefault();
                     const form = e.currentTarget;
                     const name = (form.elements.namedItem("name") as HTMLInputElement).value
                     const email = (form.elements.namedItem("email") as HTMLInputElement).value
                     const password = (form.elements.namedItem("password") as HTMLInputElement).value
                     const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value
                    //  dispatch(postRegistrationUser({name,email,password,confirmPassword}))
                    }}>
                        <button className="btnGoogle">
                            <span>
                                <img src={googleIcon} alt="google-icon" />
                            </span>Google</button>
                        <label>
                            <p style={{ flexDirection: "row" }}>Ім’я <span className="starRequired">*</span></p>
                            <input type="text" name="name" placeholder="..." className="inputAccount" />
                        </label>
                        <label>
                            <p style={{ flexDirection: "row" }}>Електронна адреса <span className="starRequired">*</span></p>
                            <input type="email" name="email" placeholder="your@email.com" className="inputAccount" />
                        </label>
                        <label>
                            <p style={{ flexDirection: "row" }}>Пароль <span className="starRequired">*</span></p>
                            <input type="password" name="password" placeholder="..." className="inputAccount" />
                        </label>
                        <label>
                            <p style={{ flexDirection: "row" }}>Підтвердити пароль <span className="starRequired">*</span></p>
                            <input type="password" name="confirmPassword" placeholder="..." className="inputAccount" />
                        </label>
                        <button className="btnAccount" onClick={() => navigate("/library")}>Зареєструватися</button>
                        <button className="btnLogIn" onClick={() => navigate("/login")}>
                            Вже з нами?
                            <span className="text-sign-up">Увійти</span>
                        </button>
                    </form>
                </div>
            </div>
            <InfoPage />
        </div>
    )
}