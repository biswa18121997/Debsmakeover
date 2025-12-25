import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import {useEffect} from 'react';

export default function App() {
    async function wakeServer(){
        try{
            const awekeningCall = await fetch(import.meta.env.VITE_API_BASE_URL);
            const didServerWake = await awekeningCall.json();
            console.log(didServerWake.message);
            
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        wakeServer();
    },[])
        return (<>
                <Navbar />
                <Outlet />
                </>
        );
}
