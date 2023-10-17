import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import Graphs from './Graphs'
import DCircleChart from './DCircleChart'
import Products from './Products'
import DataTable from './Products'

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="p-4 flex flex-col md:flex-row gap-4 w-full">
				<Graphs />
				<DCircleChart />
			</div>
    <DataTable/>
		</div>
  )}
export default Dashboard