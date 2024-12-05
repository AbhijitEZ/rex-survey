import StatisticsWidget from '../../../../components/StatisticsWidget'

const Statistics = () => {
	return (
		<div className="flex flex-wrap gap-6 mb-6">
			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Points Earned'} title={'Number of customers'} change={'2,541'} stats={'3,860'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-danger'} cardTitle={'Points Redeemed'} title={'Number of Orders'} change={'1.08%'} stats={'7,543'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-danger'} cardTitle={'Points Available'} title={'Average Revenue'} change={'7.00%'} stats={'$9,254'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Points in Review'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			{/* Profile */}
			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Demographic'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Economics'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'LSM'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>

			<div className="">
				<StatisticsWidget variant={'bg-success'} cardTitle={'Technology'} title={'Growth'} change={'4.87%'} stats={'+ 20.6%'} dataSince={'Since last month'} classname={'apex-charts'} />
			</div>
		</div>
	)
}

export default Statistics
