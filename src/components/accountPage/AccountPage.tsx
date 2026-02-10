import { Container } from "../container/Container"
import { ChangeEvent, useState } from "react"
import defaultImageAccount from "../../assets/images/defaultImageAccount.webp"
import { useAppSelector } from "../../redux/hook"
export const AccountPage = () => {
const [image, setImage] = useState<string | null>(null)
const nameRegister  = useAppSelector((state) => state.registration.info)
const nameLogin = useAppSelector((state) => state.login.info)
const getRegisterName = nameRegister.map((n) => n.name)
const getLoginName = nameLogin?.user?.email
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files  && e.target.files[0]) {
    const file =  e.target.files[0]
    setImage(URL.createObjectURL(file))
    }
}
    return (
        <Container>
            <div className="containerAccountPage">
            <div className="wrapperAccount">
              <div className="backgroundWrapper">
               <input type="file" accept="image/*" onChange={handleChange} id="fileInput" hidden/>
               <label htmlFor="fileInput" className="accountImage">
                     <div className="containerAccount">
                <span className="btnChangeImage">+</span>
                    <img src={image ?? defaultImageAccount} alt="default image" className="imageDefaultAccount"/>
                 <p className="userName">{getRegisterName[0] || getLoginName}</p>
               <button className="btnEdit">Edit Profile</button>
               </div>
               </label>
              </div>
            </div>
            </div>
        </Container>
    )
}
