import { useAppSelector } from "../../redux/hook"
export const Header = () => {
    const isRegistrationSuccess = useAppSelector(state => state.registration.isSuccess)
    const userInfoRegistration = useAppSelector(state => state.registration.info)
    const userNameRegistration = userInfoRegistration.map(name => name.name)
    const isLoginSuccess = useAppSelector(state => state.login.isSuccess)
    const userInfoLogin = useAppSelector(state => state.login.info)
    const userNameLogin = userInfoLogin?.user.email
    return (
        <header className="headerReading">
            <p className="titleHeader">BR</p>
            {isRegistrationSuccess &&  (
                <p>{userNameRegistration}</p>
            )}
        </header>
    )
}