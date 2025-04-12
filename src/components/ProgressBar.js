import React from 'react'
import './ProgressBar.css'
export default function ProgressBar({width,display}) {
  return (
    <div id='progressBar' style={{height:'2px',backgroundColor:'white',position:'absolute',top:'0',zIndex:'1',width: width,display:display}}>
      
    </div>
  )
}
