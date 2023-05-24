import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>

    <div className="container">
        {/* Rutas de la app */}
        {/* Las rutas estan hechas en archivo de barril para poder leer mejor el codigo */}
    <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </div>
      
    </>
  );
};
