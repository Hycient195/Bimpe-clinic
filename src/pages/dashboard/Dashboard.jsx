import './Dashboard.css';
import ProfilePic from '../../assets/profile-pic.png'
import NotifBell from '../../assets/notif-bell-with-dot.svg';
import SettingsIcon from '../../assets/settings.svg';
import LeftSection from './left-aside/LeftSection';
import ChartGrid from './chart-grid/ChartGrid';
import TransactionList from './transaction-list/TransactionList';
import RightAside from './right-aside/RightAside';

export default function Dashboard(){
  
  return(
    <div className="dashboard-container">

      {/*=================================*/}
      {/* Beginning of Navigation section */}
      {/*=================================*/}
      <nav className="dashboard-navbar">
        <h2 className="dashboard-title">Invoicebiz</h2>
        <div className="right">
          <img src={NotifBell} alt=""/>
          <img src={SettingsIcon} alt=""/>
          <img src={ProfilePic} alt=""/>
        </div> 
      </nav>
      {/*  End Of Navigation Section */}



      {/*===========================*/}
      {/* Beginning of Main section */}
      {/*===========================*/}
      <main className="main-body">
        <LeftSection/>
        

        {/*===========================*/}
        {/* Beginning of Center section */}
        {/*===========================*/}
        <div className="center-section">
          <h1 className="not-bold">Dashboard</h1>
        
          <ChartGrid/>
          <TransactionList/>
          
        </div>
        {/* End of Center section */}

        <aside className="right-section">
          <RightAside/>
        </aside>
      </main>
      {/* End of main section */}

    </div>
  )
}