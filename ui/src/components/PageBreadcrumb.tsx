import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

interface PageTitleProps {
	subName?: string
	title: string
	addedChild?: ReactNode
}

const PageBreadcrumb = ({ subName, title, addedChild }: PageTitleProps) => {
	const breadcrumbItems = ['Attex', subName, title]
	return (
		<>
			<Helmet>
				<title>{title} | Rex Survey</title>
			</Helmet>
			{subName && (
				<div className="flex justify-between items-center mb-6">
					<div className="flex gap-4">
						<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">{title}</h4>
						{addedChild}
					</div>
				</div>
			)}
		</>
	)
}

export default PageBreadcrumb
