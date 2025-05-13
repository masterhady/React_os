import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Redux/Actions/LangAction";

function Home(){

    const myLang = useSelector((state) => state.myLangRed.lang); 

    const dispatch = useDispatch();

    const chnageMyLanguage = () => {
        // change state in store --> useDispatch()
        dispatch(changeLanguage(myLang == "EN" ? "AR" : "EN"))

    }

    return(
        <div>
            <h2 className="text-danger"> My Current Lnag: {myLang} </h2>
            <button onClick={() => chnageMyLanguage()} className="btn btn-primary"> Change Lang  </button>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
        </div>
    );

}

export default Home;