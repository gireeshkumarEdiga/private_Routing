import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";


export const Login = () => {
    const  {form, setForm} = useState({});
    const {handleToken} = useContext(AuthContext);
    
    const Navigate = useNavigate();

    const handleChange = ({target:{name,value}}) => {
        setForm({
            ...form,
            [name] : value,
        })
    }
    return (
        <div>
            <input onChange={handleChange} type="email" name="email" placeholder="enter your email" />
            <input onChange={handleChange} type="password" name="password" placeholder="enter your password" />
            <button onClick={() => { handleToken("123"); Navigate(-1)}}>Login</button>
        </div>
    )
}