import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { SalesData } from '../data/SalesData'
const Graphs = () => {
 
  return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<h3 className='text-xl font-bold'>Overview</h3>
      <strong className="text-gray-400 font-medium">Monthly Earning</strong>
			<div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={200}
						height={300}
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
