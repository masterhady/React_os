import logo from './logo.svg';
import './App.css';
import AppClassComponent from './Pages/AppClassComponent/AppClassComponent';
import AppFunctionComponent  from './Pages/AppFunctionComponent/AppFunctionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import UserForm from './Pages/UserForm';
import CompaniesList from './Pages/CompaniesList/CompanyList';
import CompanyDetails from './Pages/CompaniesList/CompanyDetails';
import Blogs from './Pages/Blog/Blog';
import { useSelector } from 'react-redux';
function App() {
  // read lang from store
  const myLang = useSelector((state)=> state.myLangRed.lang)
  const myTheme = useSelector((state) => state.myThemeRed.theme) 
  return (
    <div className={myTheme == "light" ? "bg-light text-dark" : "bg-dark text-light"}
     dir={myLang == "EN" ? "ltr" : "rtl"}>
        <BrowserRouter> 
        <Navbar />
          <Switch> 
            <Route path={"/"}    component={Home} exact/>
            <Route path={"/class"}   component={AppClassComponent} exact/> 
            <Route path={"/function"} component={AppFunctionComponent} exact/>
            <Route path={"/list"} component={CompaniesList} exact/>
            <Route path={"/company/:id"} component={CompanyDetails} exact/>
            <Route path={"/blogs"} component={Blogs} exact />


            <Route path={"/add"} component={UserForm} exact />
            <Route path={"*"}    component={NotFound} exact/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
