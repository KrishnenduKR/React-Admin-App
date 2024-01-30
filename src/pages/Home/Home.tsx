import ChartBox from "../../components/ChartBox/ChartBox"
import TopBox from "../../components/TopBox/TopBox"
import "./Home.scss"
import {chartBoxUser, chartBoxProduct, chartBoxConversion, chartBoxRevenue, barChartBoxRevenue, barChartBoxVisit } from "../../data"
import BarChartBox from "../../components/BarChartBox/BarChartBox"
import PieChartBox from "../../components/PieChartBox/PieChartBox"
import BigChartBox from "../../components/BigChartBox/BigChartBox"

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser} /></div>
      <div className="box box3"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
    </div>
  )
}

export default Home