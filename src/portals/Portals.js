import React from 'react'
import ReactDom from 'react-dom'

function Portals() {
    return ReactDom.createPortal (
        <div>
           portals demo 
        </div>
        , document.getElementById('portal-root')
    )
}

export default Portals
