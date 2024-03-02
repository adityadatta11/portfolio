import logo from './logo.svg'
import './App.scss'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './assets/components/Layout';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </>
    )
}

export default App