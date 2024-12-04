// components
import Statistics from './components/Statistics'
import TopSellingProducts from './components/TopSellingProducts'
import { PageBreadcrumb } from '../../../components'

// dummy data
import { products } from './data'
import Surveys from './components/Surveys'

const Ecommerce = () => {
	return (
		<>
			<PageBreadcrumb title="Home" subName="Menu" />
			<Statistics />

			<div className="grid lg:grid-cols-2 gap-6 mb-6">
				<Surveys />
				<TopSellingProducts products={products} />
			</div>
		</>
	)
}

export default Ecommerce
