import { QuoteWrapper } from "./quote/QuoteWrapper"
import googleIcon from "../../assets/svg/googleIcon.svg"
import { useNavigate } from "react-router-dom"
// import { RootState,AppDispatch } from "../../redux/store"
import { postLoginUser } from "../../redux/thunk/thunkLogin"
import { useSelector,useDispatch } from "react-redux"
export const Login = () => {
// const user = useSelector((state:RootState) => state.login)
// console.log(user)
// const dispatch = useDispatch<AppDispatch>()
const navigate = useNavigate()
    return (
        <div className="wrapperElementLogin">
            <div className="wrapperLogin">
                <div className="wrapperLayoutLogin">
                    <form className="formLogin" onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    const form =e.currentTarget
                    const email = (form.elements.namedItem("email") as HTMLInputElement).value
                    const password = (form.elements.namedItem("password") as HTMLInputElement).value
                    // dispatch(postLoginUser({email, password}))
                    }}>
                        <button className="btnGoogle">
                            <span>
                                <img src={googleIcon} alt="google-icon" />
                            </span>
                            Google
                        </button>
                        <label>
                             <p style={{ flexDirection: "row" }}>Електронна адреса <span className="starRequired">*</span></p>
                            <input type="email" placeholder="your@email.com" className="inputAccount" name="email"/>
                        </label>
                        <label>
                              <p style={{ flexDirection: "row" }}>Пароль <span className="starRequired">*</span></p>
                            <input type="password" placeholder="Пароль" className="inputAccount" name="password"/>
                        </label>
                        <button className="btnAccount" onClick={() => navigate("/library")}>Увійти</button>
                        <button className="btn-registrationText" style={{color:"#FF6B08"}} onClick={() => navigate("/sign-up")}>Реєстрація</button>
                    </form>
                </div>
            </div>
            <QuoteWrapper />
        </div>
    )
}