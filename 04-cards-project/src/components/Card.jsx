import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>

  <div className="card">
            <div className="top">
                <img src={props.brandLogo} alt="" />
                <button>Save <Bookmark size={12} /></button>
              </div>

              <div className="center">
              <h2>{props.companyName} <span>{props.datePosted}</span></h2>
              <h2>{props.post}</h2>
                   <div className = "Tag">
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>

                  </div>
              </div>


              <div className="bottom">
                  <div>
                      
                        <h2><b>{props.pay}</b></h2>
                        <p>{props.location}</p>
                      
                  </div>
                   <button>Apply Now</button>
              </div>

              
    
     </div>


    </div>
  )
}

export default Card