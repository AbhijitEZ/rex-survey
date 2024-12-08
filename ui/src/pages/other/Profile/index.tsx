import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import Chart, { type ChartItem } from 'chart.js/auto'

// components
import { PageBreadcrumb } from '../../../components'

//image
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'

// dummy data
import { experienceData, productConfig, projectTableData } from './data'

const ProfilePages = () => {
	useEffect(() => {
		const productTag = document.getElementById('high-performing-product') as ChartItem
		const chart = new Chart(productTag, productConfig)

		return () => {
			chart.destroy()
		}
	}, [])

	return (
		<>
			<PageBreadcrumb title="Profile" subName="Extra Pages" />
			<div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1 gap-6">
				<div className="xl:col-span-4 lg:col-span-5">
					<div className="card text-center p-6 mb-6">
						<img src={avatar1} alt="" className="w-24 rounded-full p-1 border border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 mx-auto" />
						<h4 className="mb-1 mt-3 text-lg">Tosha Minner</h4>
						<div className="flex flex-wrap gap-1 justify-center"></div>
						<div className="text-start mt-6">
							<p className="text-zinc-400 mb-3">
								<strong>Full Name :</strong> <span className="ms-2">Tosha K. Minner</span>
							</p>
							<p className="text-zinc-400 mb-3">
								<strong>Mobile :</strong>
								<span className="ms-2">(123) 123 1234</span>
							</p>
							<p className="text-zinc-400 mb-3">
								<strong>Email :</strong> <span className="ms-2 ">user@email.domain</span>
							</p>
							<p className="text-zinc-400 mb-1.5">
								<strong>Location :</strong> <span className="ms-2">USA</span>
							</p>
						</div>

						<ul className="social-list list-inline mt-6 ">
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-primary text-primary">
									<i className="ri-facebook-circle-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-danger text-danger">
									<i className="ri-google-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-info text-info">
									<i className="ri-twitter-fill"></i>
								</Link>
							</li>
							<li className="me-2 inline-block">
								<Link to="" className="h-8 w-8 leading-7 block border-2 rounded-full border-secondary text-secondary">
									<i className="ri-github-fill"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="xl:col-span-8 lg:col-span-7">
					<div className="card p-6 mb-6">
						<h4 className="text-base mb-6">Survey's</h4>
						<div dir="ltr">
							<div style={{ height: 260 }} className="chartjs-chart">
								<canvas id="high-performing-product"></canvas>
							</div>
						</div>
					</div>

					<div className="card p-6">
						<Tab.Group>
							<Tab.List as="nav" className="flex flex-wrap space-x-2 bg-light dark:bg-gray-700/60 mb-6" aria-label="Tabs">
								<Tab type="button" className={({ selected }) => `${selected ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary  bg-transparent'} flex-auto py-2 px-4 inline-flex justify-center items-center gap-2 text-center text-sm font-semibold  dark:hover:text-gray-400 first:rounded-s-md last:rounded-e-md`}>
									Settings
								</Tab>
								<Tab type="button" className={({ selected }) => `${selected ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary  bg-transparent'} flex-auto py-2 px-4 inline-flex justify-center items-center gap-2 text-center text-sm font-semibold  dark:hover:text-gray-400 first:rounded-s-md last:rounded-e-md`}>
									Timeline
								</Tab>
							</Tab.List>

							<Tab.Panels className="mt-3">
								<Tab.Panel id="fill-and-justify-1" aria-labelledby="fill-and-justify-item-1">
									<form>
										<h5 className="mb-9 uppercase text-base">
											<i className="ri-contacts-book-2-line me-1.5"></i> Personal Info
										</h5>
										<div className="grid md:grid-cols-2 grid-cols-1 gap-x-2.5">
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="firstname" className="font-semibold text-sm text-gray-500">
														First Name
													</label>
													<input type="text" className="form-input" id="firstname" placeholder="Enter first name" />
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="lastname" className="font-semibold text-sm text-gray-500">
														Last Name
													</label>
													<input type="text" className="form-input" id="lastname" placeholder="Enter last name" />
												</div>
											</div>

											<div className="md:col-span-2">
												<div className="mb-6 space-y-2">
													<label htmlFor="userbio" className="font-semibold text-sm text-gray-500">
														Bio
													</label>
													<textarea className="form-input" id="userbio" rows={4} placeholder="Write something..."></textarea>
												</div>
											</div>
										</div>

										<div className="grid md:grid-cols-2 grid-cols-1 gap-x-2.5">
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="useremail" className="font-semibold text-sm text-gray-500">
														Email Address
													</label>
													<input type="email" className="form-input" id="useremail" placeholder="Enter email" />
													<span className="text-gray-500">
														<small>
															If you want to change email please{' '}
															<Link to="" className="text-primary">
																click
															</Link>{' '}
															here.
														</small>
													</span>
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="userpassword" className="font-semibold text-sm text-gray-500">
														Password
													</label>
													<input type="password" className="form-input" id="userpassword" placeholder="Enter password" />
													<span className="text-gray-500">
														<small>
															If you want to change password please{' '}
															<Link to="" className="text-primary">
																click
															</Link>{' '}
															here.
														</small>
													</span>
												</div>
											</div>
										</div>

										<h5 className="text-base mb-6 uppercase bg-light p-2 dark:bg-gray-700">
											<i className="ri-building-line me-1.5"></i> Company Info
										</h5>
										<div className="grid md:grid-cols-2 grid-cols-1 gap-x-2.5">
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="companyname" className="font-semibold text-sm text-gray-500">
														Company Name
													</label>
													<input type="text" className="form-input" id="companyname" placeholder="Enter company name" />
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="cwebsite" className="font-semibold text-sm text-gray-500">
														Website
													</label>
													<input type="text" className="form-input" id="cwebsite" placeholder="Enter website url" />
												</div>
											</div>
										</div>

										<h5 className="text-base mb-6 uppercase bg-light p-2 dark:bg-gray-700">
											<i className="ri-global-line me-1.5"></i> Social
										</h5>
										<div className="grid md:grid-cols-2 grid-cols-1 gap-x-2.5">
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-fb" className="font-semibold text-sm text-gray-500">
														Facebook
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-facebook-fill"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-fb" placeholder="Url" />
													</div>
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-tw" className="font-semibold text-sm text-gray-500">
														Twitter
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-twitter-line"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-tw" placeholder="Username" />
													</div>
												</div>
											</div>

											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-insta" className="font-semibold text-sm text-gray-500">
														Instagram
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-instagram-line"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-insta" placeholder="Url" />
													</div>
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-lin" className="font-semibold text-sm text-gray-500">
														Linkedin
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-linkedin-fill"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-lin" placeholder="Url" />
													</div>
												</div>
											</div>

											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-sky" className="font-semibold text-sm text-gray-500">
														Skype
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-skype-line"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-sky" placeholder="@username" />
													</div>
												</div>
											</div>
											<div className="">
												<div className="mb-6 space-y-2">
													<label htmlFor="social-gh" className="font-semibold text-sm text-gray-500">
														Github
													</label>
													<div className="flex">
														<span className="inline-flex items-center px-4 rounded-s border border-e-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
															<i className="ri-github-line"></i>
														</span>
														<input type="text" className="form-input rounded-s-none" id="social-gh" placeholder="Username" />
													</div>
												</div>
											</div>
										</div>

										<div className="text-end">
											<button type="submit" className="btn bg-success text-white mt-3">
												<i className="ri-save-line me-1"></i> Save
											</button>
										</div>
									</form>
								</Tab.Panel>
								<Tab.Panel id="fill-and-justify-2" aria-labelledby="fill-and-justify-item-2">
									<div className="border rounded mt-3 mb-6 dark:border-gray-600">
										<form action="#" className="comment-area-box">
											<textarea rows={3} className="form-input border-0 resize-none" placeholder="Write something...."></textarea>
											<div className="p-2 bg-light flex justify-between items-center dark:bg-gray-700">
												<div>
													<Link to="#" className="btn btn-sm px-2 !text-base text-gray-900 bg-light hover:bg-dark/20 dark:text-light dark:hover:bg-light/20 dark:bg-gray-700">
														<i className="ri-contacts-book-2-line"></i>
													</Link>
													<Link to="#" className="btn btn-sm px-2 !text-base text-gray-900 bg-light hover:bg-dark/20 dark:text-light dark:hover:bg-light/20 dark:bg-gray-700">
														<i className="ri-map-pin-line"></i>
													</Link>
													<Link to="#" className="btn btn-sm px-2 !text-base text-gray-900 bg-light hover:bg-dark/20 dark:text-light dark:hover:bg-light/20 dark:bg-gray-700">
														<i className="ri-camera-3-line"></i>
													</Link>
													<Link to="#" className="btn btn-sm px-2 !text-base text-gray-900 bg-light hover:bg-dark/20 dark:text-light dark:hover:bg-light/20 dark:bg-gray-700">
														<i className="ri-emoji-sticker-line"></i>
													</Link>
												</div>
												<button type="submit" className="btn btn-sm bg-dark text-white !text-base dark:bg-gray-600">
													Post
												</button>
											</div>
										</form>
									</div>

									<div className="border rounded p-3 mb-3 dark:border-gray-600">
										<div className="flex">
											<img className="me-3 rounded-full h-8" src={avatar4} alt="Generic placeholder image" />
											<div>
												<h5 className="text-base/none">Thelma Fridley</h5>
												<p className="text-gray-500 mb-4">
													<small>about 1 hour ago</small>
												</p>
											</div>
										</div>
										<div className="text-base text-center italic text-dark dark:text-light">
											<i className="ri-double-quotes-l fs-20"></i> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
										</div>

										<div className="-mx-3 p-3 mt-6 bg-light dark:bg-gray-700">
											<div className="flex">
												<img className="me-3 rounded-full h-8" src={avatar3} alt="Generic placeholder image" />
												<div>
													<h5 className="text-base mb-1">
														Jeremy Tomlinson <small className="text-sm text-gray-500">about 2 minuts ago</small>
													</h5>
													Nice work, makes me think of The Money Pit.
													<br />
													<Link to="" className="text-gray-500 text-sm inline-block mt-3">
														<i className="ri-reply-line"></i> Reply
													</Link>
													<div className="flex mt-6">
														<Link to="" className="pe-3">
															<img src={avatar4} className="text-sm text-gray-500 h-8 rounded-full" alt="Generic placeholder image" />
														</Link>
														<div>
															<h5 className="text-base mb-1">
																Thelma Fridley <small className="text-gray-500">5 hours ago</small>
															</h5>
															i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.
														</div>
													</div>
												</div>
											</div>

											<div className="flex mt-3">
												<Link to="" className="pe-3">
													<img src={avatar1} className="rounded-full h-8" alt="Generic placeholder image" />
												</Link>
												<div className="w-full">
													<input type="text" id="simpleinput" className="form-input bg-white border-0 rounded-md py-1.5 px-3 dark:bg-gray-800" placeholder="Add comment" />
												</div>
											</div>
										</div>

										<div className="mt-2">
											<Link to="" className="btn btn-sm !text-sm text-danger items-center">
												<i className="ri-heart-line me-1"></i>
												<span>Like (28)</span>
											</Link>
											<Link to="" className="btn btn-sm !text-sm text-muted items-center">
												<i className="ri-share-line me-1"></i>
												<span>Share</span>
											</Link>
										</div>
									</div>

									<div className="border rounded p-3 mb-6 dark:border-gray-600">
										<div className="flex">
											<img className="me-3 rounded-full h-8" src={avatar3} alt="Generic placeholder image" />
											<div>
												<h5 className="text-base">Jeremy Tomlinson</h5>
												<p className="text-gray-500 mb-4">
													<small>3 hours ago</small>
												</p>
											</div>
										</div>
										<p className="mb-4">Story based around the idea of time lapse, animation to post soon!</p>

										<div className="flex gap-1.5 items-center">
											<img src={avatar1} alt="post-img" className="rounded-md h-16" />
											<img src={avatar2} alt="post-img" className="rounded-md h-16" />
											<img src={avatar3} alt="post-img" className="rounded-md h-16" />
										</div>

										<div className="mt-2">
											<Link to="" className="btn btn-sm !text-sm text-gray-500 items-center">
												<i className="ri-reply-line me-1"></i> Reply
											</Link>
											<Link to="" className="btn btn-sm !text-sm text-gray-500 items-center">
												<i className="ri-heart-line me-1"></i> Like
											</Link>
											<Link to="" className="btn btn-sm !text-sm text-gray-500 items-center">
												<i className="ri-share-line me-1"></i> Share
											</Link>
										</div>
									</div>

									<div className="border rounded p-3 mb-6 dark:border-gray-600">
										<div className="flex">
											<img className="me-3 rounded-full h-8" src={avatar6} alt="Generic placeholder image" />
											<div>
												<h5 className="text-base">Martin Williamson</h5>
												<p className="text-gray-500 mb-4">
													<small>15 hours ago</small>
												</p>
											</div>
										</div>
										<p className="text-sm mb-4">The parallax is a little odd but O.o that house build is awesome!!</p>

										<iframe src="https://player.vimeo.com/video/87993762" className="h-80"></iframe>
									</div>

									<div className="text-center">
										<Link to="" className="text-danger">
											<i className="ri-loader-fill me-1.5"></i> Load more{' '}
										</Link>
									</div>
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfilePages
