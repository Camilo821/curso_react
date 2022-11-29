import React from "react";
import './ViewedFilter.css'
import { MovieContext } from "../MovieContext";



function ViewedFilter(){
    const { activePage, setNewActivePage } = React.useContext(MovieContext)
    const onSelectPage = () => {
        if(activePage === 'Por ver'){
            setNewActivePage('Visto')
        } else {
            setNewActivePage('Por ver')
        }
    }
    return (
        <React.Fragment>
            <div className="filter">
                <button onClick={onSelectPage} className={`${activePage === 'Por ver' && 'active'}`} >Por ver{activePage==='Por ver' && <hr />}</button>
                <button onClick={onSelectPage} className={`${activePage === 'Visto' && 'active'}`} >Visto{activePage==='Visto' && <hr />}</button>
            </div>
        </React.Fragment>
    )
}


export { ViewedFilter }