import { useAppSelector } from "../../redux/hook"
import bookIcon from "../../assets/svg/bookIcon.svg"
import homeIcon from "../../assets/svg/homeIcon.svg"
import { useNavigate, Link } from "react-router-dom"
export const Header = () => {
    const isRegistrationSuccess = useAppSelector(state => state.registration.isSuccess)
    const userInfoRegistration = useAppSelector(state => state.registration.info)
    const userNameRegistration = userInfoRegistration?.[0]?.name
    const isLoginSuccess = useAppSelector(state => state.login.isSuccess)
    const userInfoLogin = useAppSelector(state => state.login.info)
    const userNameLogin = userInfoLogin?.user?.email
    const navigate = useNavigate()
    console.log(isRegistrationSuccess, userNameRegistration)
    console.log(isLoginSuccess, userNameLogin)
    return (
        <header className="headerReading">
            <p className="titleHeader">BR</p>
            {(isRegistrationSuccess || isLoginSuccess) && (
                <>
                    <div className="userWrapperHeader">
                        <button className="btnHeader">
                            {userNameRegistration?.charAt(0) || userNameLogin?.charAt(0)}
                        </button>
                        <Link to="/account" className="textHeader">{userNameRegistration || userNameLogin}</Link>
                    </div>
                    <div className="iconsWrapper">
                        <button className="btnHeader">
                            <img src={bookIcon} alt="book-icon" onClick={() => navigate("/library/status")}/>
                        </button>
                        <button className="btnHeader--back" onClick={() => navigate("/library/intention")}>
                            <img src={homeIcon} alt="home-icon" />
                        </button>
                        <hr className="separate-dash" />
                        <button className="btnHeader btnAnotherDevices">
                            {userNameRegistration?.charAt(0) || userNameLogin?.charAt(0)}
                        </button>
                        <button className="btnLogOut">
                            <p>Вихід</p>
                        </button>
                    </div>
                </>
            )}
        </header>
    )
}