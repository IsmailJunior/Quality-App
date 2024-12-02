const UserRepository = ( apiAdapter: any ) => ( {
	getMe: async () =>
	{
		return await apiAdapter.get( '/me' );
	}
} );

export default UserRepository;