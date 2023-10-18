import { BarChart, Bar, XAxis, Tooltip,ResponsiveContainer } from 'recharts'
import { SalesData } from '../data/SalesData'
const Graphs = () => {
 
  return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<h3 className='text-xl font-bold'>Overview</h3>
      <strong className="text-gray-400 font-medium">Monthly Earning</strong>
			<div className="w-full md:w-full flex-1 text-xs">
				<ResponsiveContainer width={"100%"} height={"90%"}>
					<BarChart
					 width={400} height={400}
						data={SalesData}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<XAxis axisLine={false}  dataKey="month" />
						<Tooltip />
						<Bar dataKey="totalSales" fill="#0ea5e9" radius={10}/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default Graphs;
