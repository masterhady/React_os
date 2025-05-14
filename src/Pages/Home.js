import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Redux/Actions/LangAction";
import { LanguageContext } from "../Context/langContext";
import { useContext } from "react";

function Home(){

    // use context 
    const {myContextLang, setMyContextLang} =  useContext(LanguageContext)



    const myLang = useSelector((state) => state.myLangRed.lang); 

    const dispatch = useDispatch();

    const chnageMyLanguage = () => {
        // change state in store --> useDispatch()
        dispatch(changeLanguage(myLang == "EN" ? "AR" : "EN"))

    }

    return(
        <div>
            <h3 className="text-primary">  {myContextLang}  </h3>
            <button className="btn btn-danger" onClick={() => setMyContextLang(myContextLang == "FR" ? "ES" : "FR")}> Change Lang From Context </button>

            <h2 className="text-danger"> My Current Lnag: {myLang} </h2>
            <button onClick={() => chnageMyLanguage()} className="btn btn-primary"> Change Lang  </button>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
        </div>
    );

}

export default Home;