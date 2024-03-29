import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarChartBox.scss";

type Props = {
    title: string;
    chartData: object[];
    dataKey: string;
    color: string;
}

function BarChartBox(props : Props) {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                    <Tooltip contentStyle={{backgroundColor: "#2a3447", borderRadius: "1px",
                       }} labelStyle={{display: "none"}} cursor={{fill: "none"}} />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox