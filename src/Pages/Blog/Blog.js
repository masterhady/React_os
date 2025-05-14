import { useContext, useEffect, useState } from "react"
import MyTitle from "../../Components/MyTitle"
import axios from "axios"
import MyCard from "../../Components/MyCard"
import { ThemeContext } from "../../Context/themeContext"
function Blogs() {

    const {myContextTheme, setMyContextTheme} = useContext(ThemeContext)


    const [blogs, setBlogs] = useState([])
    const [category, setCategory] = useState("food")
 
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?apiKey=5bb3f7c3d7c049dea9425d57e5561caa&q="+category)
        .then((response) => {
            // console.log(response)
            setBlogs(response.data.articles)
        })
        .catch((error) => {
            console.log(error)
        })

    },[category])

    const handelSelect = (e) => {
        // console.log(e.target.value)
        setCategory(e.target.value)
    }


    return(
        <> 
            <h3> {myContextTheme} </h3>
            <button className="btn btn-info" onClick={() =>setMyContextTheme("Light Context") }> Change Context theme </button>

            <MyTitle head="My Blogs" />
            <select class="form-select" onChange={(e) => handelSelect(e)}>
                <option selected>Open this select menu</option>
                <option value="food">Food</option>
                <option value="sport">Sport</option>
                <option value="iot">IoT</option>
                <option value="ai">AI</option>
            </select>
            {
                blogs.map(blog => {
                    return <MyCard img={blog.urlToImage} desc={blog.description} title={blog.title} />
                })
            }

        </>
    )
}
export default Blogs