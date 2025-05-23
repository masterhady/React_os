import { combineReducers } from "redux";
import languageReducer from "./LangReducer";
import themeReducer from "./ThemeReducer";
import loaderReducer from "./LoaderReducer";
import CompaniesReducer from "./CompaniesReducer";



export default combineReducers({

    myLangRed: languageReducer,
    myThemeRed: themeReducer,
    myLoaderRed: loaderReducer,
    myList: CompaniesReducer


})