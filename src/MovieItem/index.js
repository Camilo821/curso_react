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
        <li className="MovieItem" style={{backgroundImage: `url(${props.link})`}} >
            <div className="blur">
                <div className="info-container">
                    <p className={`MovieItem-p movie-title ${props.link==="" && 'title'}`} >
                        {props.text}
                    </p>
                    <p className={`MovieItem-p ${props.link==="" && 'type'}`}>
                        {props.type}
                    </p>
                    <p className={`MovieItem-p ${props.link==="" && 'productor'}`}>
                        {props.productor}
                    </p>
                    <button className={`button-delete ${props.link==="" && 'title'}`} onClick={props.onDelete}>Borrar</button>
                    <button className="button-complete" onClick={props.onComplete}>{!props.completed && 'Ya lo ví'}{props.completed && 'No lo ví'}</button>
                </div>
            </div>
        </li>
    )
}
export { MovieItem };
