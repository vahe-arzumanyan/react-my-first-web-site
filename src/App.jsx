import React, {useState, useEffect} from "react";
import './App.scss';
import ShoppingPage from "./shopping_page";
import AdminPage from "./admin_page/component/admin-routing";
import {useSelector} from "react-redux";


const App = () => {
    const userToken = useSelector(state => state.Authorization.userToken)
    const [token, setToken] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('userToken')
        setToken(localToken)
    }, [])
    return <div>
        {token ? <AdminPage/> : <ShoppingPage/>}
    </div>
}

export default App;