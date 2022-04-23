import { useState } from 'react';
import  businessIcon  from '../../../assets/business-icon.svg';
import  dashboardIcon  from '../../../assets/dashboard-icon.svg';
import  documentIcon  from '../../../assets/document-icon.svg';
import  feedbackIcon  from '../../../assets/feedback-icon.svg';
import  invoicesIcon  from '../../../assets/invoices-icon.svg';
import  privacyIcon  from '../../../assets/privacy-icon.svg';
import './LeftSection.css';

export default function LeftSection(){

  const [dropDown, setDropdown] = useState({
    Business : '', Document: '', Invoices: '', Privacy: '', Terms: ''
  })

  const showDropDown = (e) =>{
    console.log(e)

    if(dropDown == ''){
      setDropdown(
        {[e.target.textContent]: <ul>
          <li>{e.target.textContent} 1</li>
          <li>{e.target.textContent} 2</li>
          <li>{e.target.textContent} 3</li>
          <li>{e.target.textContent} 4</li>
        </ul> }
      )
      e.target.style.background = 'rgba(2, 37, 103, 0.33)';
    }else{
      setDropdown('')
      e.target.style.background = 'rgba(29, 76, 244, 0.15)';
    }
  }

  return(
    <aside className="left-section">
    <div className="main-menu">
      <div className="line"><button>Main Menu</button></div>
      
    </div>

    <div className="left-section-body">
      <div className="section-item">
      <img src={dashboardIcon} alt=""/> Dashboard
      </div>
      <div onClick={showDropDown} className="section-item">
        <img src={businessIcon} alt=""/> Business
        {
          dropDown && dropDown.Business
        }
      </div>
      <div onClick={showDropDown} className="section-item">
      <img src={documentIcon} alt=""/> Document
        {
          dropDown && dropDown.Document
        }
      </div>
      <div onClick={showDropDown} className="section-item">
      <img src={invoicesIcon} alt=""/> Invoices
        {
          dropDown && dropDown.Invoices
        }
      </div>
      <hr/>
      <div onClick={showDropDown} className="section-item">
      <img src={privacyIcon} alt=""/> Privacy
        {
          dropDown && dropDown.Privacy
        }
      </div>
      <div onClick={showDropDown} className="section-item">
      Terms
        {
          dropDown && dropDown.Terms
        }
      </div>
      <hr/>
      <div className="section-item">
      <img src={feedbackIcon} alt=""/>Send Feedback
      </div>
      <div className="section-item">  
      <p>Get Help</p>
      </div>
    </div>

    
  </aside>
  )
}