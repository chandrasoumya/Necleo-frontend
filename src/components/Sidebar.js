import React, { useState } from 'react'

function Sidebar() {
    const [sidebarvisible,setSidebarvisible] = useState(true);

    const hideSidebar = ()=>{
        setSidebarvisible(false);
        document.getElementById('myprojects').style.width = '100vw';
    }

    const visibleSidebar =()=>{
        setSidebarvisible(true);
        document.getElementById('myprojects').style.width = 'calc(100vw - 241px)';
    }

  return (

    sidebarvisible ? <div id='sidebar' className='sidebar'>
      <img id="line" src='./line.png'/>
      <div className='upperdiv'>
        <div id='projects'><img src='./myprojects.png'/>My Projects</div>
        <div ><img src='sampleprojects.png'/>Sample Projects</div>
        <div ><img src='apps.png'/>Apps</div>
        <div ><img src='intro.png'/>Intro to Necleo</div>
      </div>
      <div className='lowerdiv'>
        <div ><img src='./help.png'/>Help & Support</div>
        <div ><img src='./feedback.png'/>Feedback</div>
        <div id='collapse' onClick={hideSidebar}><img src='./collapse.png'/>Collapse</div>
      </div>
    </div>
    :
    <div className='slider'>
        <img onClick={
        visibleSidebar} src='./slider.png'/>
    </div>
  )
}

export default Sidebar
