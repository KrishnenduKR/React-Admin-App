import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import "./PieCHArtBox.scss"

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];


function PieChartBox() {
  return (
    <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart >
                    <Tooltip
                    contentStyle={{backgroundColor: "white", border: "none"}}
                    />
                    <Pie
                    data={data}
                    innerRadius={"70%"}
                    outerRadius={"90%"}
                    paddingAngle={5}
                    dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="options">
            {data.map(item => (
                <div key={item.name} className="option">
                    <div className="title">
                        <div className="dot" style={{backgroundColor: item.color}}></div>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox