import React from "react";
import './MovieItem.css'
function MovieItem(props) {
    //const onComplete = () => {
    //    Swal.fire('Buen Trabajo', 'Has completado el Movie ' + props.text, 'success')
    //};
    //const onDelete = () => {
    //    Swal.fire('Borraste el Movie', 'Has borrado el Movie ' + props.text, 'error')
    //};
    //<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
    //<i className="fa-solid fa-check"></i>
    //</span>
    //<span className="Icon Icon-delete" onClick={props.onDelete}>
    //            <i className="fa-solid fa-xmark"></i>
    //        </span>
    return (
        <li className="MovieItem">
            
            <div className="info-container">
                <p className={`MovieItem-p movie-title ${props.completed && 'MovieItem-p--complete'}`} >
                    {props.text}
                </p>
                <p className="MovieItem-p type">
                    {props.type}
                </p>
                <p className="MovieItem-p productor">
                    {props.productor}
                </p>
                <button className="button-delete" onClick={props.onDelete}>Borrar</button>
                <button className="button-complete" onClick={props.onComplete}>Terminar</button>
            </div>
            
        </li>
    )
}
export { MovieItem };
