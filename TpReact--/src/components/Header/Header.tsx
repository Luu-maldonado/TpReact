import '../../Style/header.css';
import {useNavigate} from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  return (
    <>
        <div id="header">
            <div id="main-division">
                <div id="logo" > <img src="src/assets/logo.jpeg" alt="" className='HeaderImage' /></div>
                <div id="menus">
                    <h1 id="titulo" onClick={() => navigate ('/')}>EL BUEN SABOR</h1>
                    <div id="botones">
                          <button className="menu-button"onClick={() => navigate ('/menu')}>Menu</button>
                          <button className="menu-button" onClick={() => navigate ('/componentes')}>Componenetes</button>
                          <button className="menu-button" onClick={() => navigate ('/administracion')}>Administracion</button>
                         <button className="menu-button">Ingresar</button>
                         <button className="menu-button">Crear cuenta</button>
                    </div>
                </div>
                <div id="user" className='HeaderImage' ><img src="src/assets/admin.jpeg" alt="" className='HeaderImage' /></div>
            </div>
            <hr />
        </div >
    </>
  );
};
export default Header;
