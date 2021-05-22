import React from 'react'

function MemoComponent(props) {
    return (
        <div>
          Name is  {props.name}
        </div>
    )
}

export default React.memo(MemoComponent)
