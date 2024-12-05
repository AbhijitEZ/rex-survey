const Profile = () => {
	return (
		<div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-6">
			<div className="xl:col-span-4 lg:col-span-5">
				<div className="card text-center p-6 mb-6">
					<h4 className="mb-1 mt-3 text-lg">Update your profile and get ready to receive surveys</h4>
					<p className="text-gray-400 mb-4">Answer all the questions so we understand and send you survey that are most relevant to you.</p>
					<div className="flex flex-wrap gap-1 justify-around">
						<button type="button" className="btn bg-success btn-sm !text-sm text-white mb-3">
							Redeem
						</button>
						<button type="button" className="btn bg-danger btn-sm !text-sm text-white mb-3">
							View Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
