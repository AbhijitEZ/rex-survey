import StatisticsWidget from '../../../../components/StatisticsWidget'

const Statistics = () => {
	return (
		<div className="grid 2xl:grid-cols-5 lg:grid-cols-6 md:grid-cols-2 gap-6 mb-6">
			<div className="2xl:col-span-1 lg:col-span-2">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Points Earned'} title={'Number of customers'} change={'2,541'} stats={'3,860'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-2">
				<StatisticsWidget variant={'bg-danger'} cardTitle={'Points Redeemed'} title={'Number of Orders'} change={'1.08%'} stats={'7,543'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-2">
				<StatisticsWidget variant={'bg-danger'} cardTitle={'Points Available'} title={'Average Revenue'} change={'7.00%'} stats={'$9,254'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-3">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Points in Review'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-3 md:col-span-2">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Points Rejected'} title={'Conversation Ration'} change={'3.07%'} stats={'9.62%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-3 md:col-span-2">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Coins Earned'} title={'Conversation Ration'} change={'3.07%'} stats={'9.62%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-3 md:col-span-2">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Coins Spent'} title={'Conversation Ration'} change={'3.07%'} stats={'9.62%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="2xl:col-span-1 lg:col-span-3 md:col-span-2">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Coins Available'} title={'Conversation Ration'} change={'3.07%'} stats={'9.62%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>
		</div>
	)
}

export default Statistics
