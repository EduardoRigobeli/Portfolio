import "./index.css";

export interface NavitemInterface {
    isActive?: boolean;//?=OPCIONAL
}

export default function Navitem(props: NavitemInterface) {
  return (
    <>
    <li className="nav-item">
        <a href='#' className={`nav-link ${props.isActive ? 'active' : ''}`}>Home</a>
    </li>
    <li className="nav-item">
        <a href='#' className={`nav-link ${props.isActive ? 'active' : ''}`}>Teste</a>
    </li>
    <li className="nav-item">
        <a href='#' className={`nav-link ${props.isActive ? 'active' : ''}`}>Projeto</a>
    </li>
    </>
  );
}
