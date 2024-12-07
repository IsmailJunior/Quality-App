import { type FC, useRef} from 'react';
import { FlatList } from 'react-native';

import { useContents } from '@/app/_hooks/use-contents';
import { WorkChip } from '@/app/_components/work-chip';

export const Works: FC<{works: any[]}> = ({works}) =>
{
	const { contents } = useContents();
	const viewConfig = useRef( { viewAreaCoveragePercentThreshold: 50 } ).current;
	const _renderItem = ( {item}: any) =>
	{
		return (
			<WorkChip
				name={ item.name }
				type={ item.type }
				status={ item.status }
				description={ item.description }
				photo={ item.photo } />
		)
	}
	return (
		 <FlatList
			className='mx-1'
			numColumns={ 2 }
				showsVerticalScrollIndicator={ false }
				bounces={ false }
				keyExtractor={ ( item: any ) => item.id }
				data={ works }
				viewabilityConfig={ viewConfig }
				scrollEventThrottle={ 1 }
				removeClippedSubviews
				renderItem={ _renderItem } />
	)
}