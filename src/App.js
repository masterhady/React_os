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
function App() {
  return (
    <div>
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
