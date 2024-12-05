import Statistics from './components/Statistics'
import { PageBreadcrumb } from '../../../components'
import Profile from './components/Profile'

const ProfilePanel = () => {
	return (
		<>
			<PageBreadcrumb title="Profile Panel" subName="Menu" />
			<div className="flex gap-2 mb-6">
				<Statistics />
                <Profile />
			</div>
		</>
	)
}

export default ProfilePanel
