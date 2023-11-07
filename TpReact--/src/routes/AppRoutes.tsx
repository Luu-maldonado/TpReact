import { Administracion } from "../pages/Administracion";
import { Componentes } from "../pages/Componentes";
import { HomePage } from "../pages/HomePage"
import {Route, Routes} from "react-router-dom";

export const AppRoutes : React.FC = () => {
  return (
    <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componenetes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
    </Routes>
  )
}
