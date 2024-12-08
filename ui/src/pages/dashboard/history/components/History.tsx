import { Grid } from 'gridjs-react'
import { dataTableRecords } from './data'

const History = () => {
	return (
		<>
			<div className="card mb-6">
				<div className="card-header">
					<div className="flex justify-between items-center">
						<h4 className="card-title">Reward History</h4>
					</div>
				</div>
				<div className="p-6">
					<Grid data={dataTableRecords} pagination={{ enabled: true, limit: 5 }} />
				</div>
			</div>
			<div className="card">
				<div className="card-header">
					<div className="flex justify-between items-center">
						<h4 className="card-title">Transaction History</h4>
					</div>
				</div>
				<div className="p-6">
					<Grid data={dataTableRecords} pagination={{ enabled: true, limit: 5 }} />
				</div>
			</div>
		</>
	)
}

export default History
