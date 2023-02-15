import React from 'react'
import '../styles/Widget.css'
import WidgetOptions from './WidgetOptions'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget-header'>
        <h5>Spaces to follow</h5>
      </div>
      <WidgetOptions/>
    </div>
  )
}

export default Widget
