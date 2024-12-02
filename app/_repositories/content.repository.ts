const ContentRepository = ( apiAdapter: any ) => ( {
	getAllContents: async (bundleId: string) =>
	{
		return await apiAdapter.get( `/${ bundleId }/contents` );
	},
	getContentById: async ( bundleId: string, contentId: string ) =>
	{
		return await apiAdapter.get( `/${ bundleId }/contents/${ contentId }` );
	},
	updateContent: async ( bundleId: string, contentId: string ) =>
	{
		return await apiAdapter.put( `/${ bundleId }/contents/${ contentId }` );
	}
} );

export default ContentRepository;