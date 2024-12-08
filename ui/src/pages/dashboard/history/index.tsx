import { PageBreadcrumb } from '../../../components'
import HistorySection from './components/History'

const History = () => {
	return (
		<>
			<PageBreadcrumb title="History" subName="Menu" />
			<div className="mb-6">
				<HistorySection />
			</div>
		</>
	)
}

export default History
