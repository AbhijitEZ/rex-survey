import { useState } from 'react'
import { Collapse } from '../../../../components/FrostUI'

const Surveys = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	function handlerAccordion() {
		setIsOpen(!isOpen)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Surveys</h4>

				<div className="pt-5">
					<Collapse open={isOpen} toggleCollapse={handlerAccordion} className="border divide-y rounded-md dark:border-gray-700 dark:divide-gray-700">
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Available Surveys</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">There is no survey available for you at present.</p>
							</div>
						</Collapse.Menu>
					</Collapse>
				</div>
			</div>
		</div>
	)
}

export default Surveys
