import './ChartGrid.css';
import barWithArrow from '../../../assets/bar-with-arrow.png';
import ChartGridCard from '../../../components/ChartGridCard/ChartGridCard';


export default function ChartGrid(){
  return(

    <div className="chart-board">

      <ChartGridCard 
        signalIcon={barWithArrow}
        title="Overdue Amount"
        date="Today"
        price="$3,568"
        rate="60.35%"
      />  

      <ChartGridCard 
        signalIcon={barWithArrow}
        title="Owing Amount"
        date="Today"
        price="$266"
        rate="60.35%"
      /> 

      <ChartGridCard 
        signalIcon={barWithArrow}
        title="Amount Paid"
        date="Today"
        price="$35,099"
        rate="60.35%"
      /> 

      <ChartGridCard 
        signalIcon={barWithArrow}
        title="Invoiced Amount"
        date="Today"
        price="$1,568"
        rate="60.35%"
      /> 
    </div>
  )
}