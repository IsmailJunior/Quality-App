const AuthRepository = ( apiAdapter: any ) => ( {
	signup: async (dto: userType) =>
	{
		return await apiAdapter.post( '/signup', dto );
	},
	login: async ( dto: any ) =>
	{
		return await apiAdapter.get( '/login', dto );
	},
	forgotPassword: async (dto: any) =>
	{
		return await apiAdapter.post('/forgotPassword', dto);
	},
	resetPassword: async (token: string,dto: any) =>
	{
		return await apiAdapter.patch(`/reset-password/${token}`, dto);
	},
	updatePassword: async (dto: any) =>
	{
		return await apiAdapter.patch('/updatePassword', dto);
	},
} );

export default AuthRepository;