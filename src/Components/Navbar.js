import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { changeTheme } from "../Redux/Actions/ThemeAction"
import { useContext } from "react"
import { LanguageContext } from "../Context/langContext"

function Navbar(){


  const {myContextLang, setMyContextLang} = useContext(LanguageContext)

    // to get/ read data from store --> useSelector 

    const myLang = useSelector((state) => state.myLangRed.lang)

    const myTheme = useSelector((state) => state.myThemeRed.theme)

    // to change data in store --> useDispatch
    const dispatch = useDispatch()
    const changeMyTheme = () => {
      // useDispatch --> action + store 
      dispatch(changeTheme(myTheme == "light" ? "Dark" : "light"))
    }



    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/class">Class Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/function">Function Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">User Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">Companies List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <p className="nav-link">{myLang}</p>
        </li>
        <li className="nav-item">
          <button onClick={() => changeMyTheme()} className="nav-link btn btn-warning">{myTheme}</button>
        </li>
        <li className="nav-item">
          <button onClick={() => setMyContextLang(myContextLang == "FR" ? "ES" : "FR" )} className="nav-link btn btn-danger">{myContextLang}</button>
        </li>
        </ul>
    </div>
  </div>
</nav>
    )



}

export default Navbar