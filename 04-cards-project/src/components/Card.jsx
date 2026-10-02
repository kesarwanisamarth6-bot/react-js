import React from 'react'
import {Bookmark} from 'lucide-react'

const card = () => {
  return (
    <div>

  <div className="card">
            <div className="top">
                <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt="" />
                <button>Save <Bookmark size={12} /></button>
              </div>

              <div className="center">
              <h2>Amazon <span>5 days ago</span></h2>
              <h2>Senior UI/UX Designer</h2>
                   <div className = "Tag">
                <h4>Part Time</h4>
                <h4>Senior Level</h4>

                  </div>
              </div>


              <div className="bottom">
                  <div>
                      
                        <h2><b>$120/hr</b></h2>
                        <p>Mumbai, India</p>
                      
                  </div>
                   <button>Apply Now</button>
              </div>

              
    
     </div>


    </div>
  )
}

export default Card