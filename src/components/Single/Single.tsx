import "./Single.scss"
import {ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip,
    Legend, Line} from "recharts";

type Props = {
    id: number,
    title: string,
    img: string,
    info: object,
    chart: {
        dataKeys: {
            name: string,
            color:string
        }[],
        data: object[]
    },
    activities: {
        text: string,
        time: string
    }[]
}

function Single(props: Props) {
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    <img src={props.img} alt=""/>
                    <span className="title">{props.title}</span>
                    <button>Update</button>
                </div>
                <div className="details">
                    {Object.entries(props.info).map((item)=> 
                        <span className="item">{item[0]} : {item[1]}</span>
                    )}
                </div>
            </div>
            <hr/>
            <div className="chart">
                    <ResponsiveContainer width="90%" height="100%">
                <LineChart
                data={props.chart.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={props.chart.dataKeys[0].name} stroke={props.chart.dataKeys[0].color} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey={props.chart.dataKeys[1].name} stroke={props.chart.dataKeys[1].color}  />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
        <div className="activities">
            <h1>Recent Activities</h1>
            <div className="list">
                <ul>
                    {
                        props.activities.map((item) =>
                        <li>
                            <div className="item">
                            <p>{item.text}</p>
                            <span>{item.time}</span>
                            </div>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Single