import React from 'react'
import uuid from 'react-uuid'
import noimage from '../../images/no-image.jpeg'

const HeadlineView = ({ articles }) => {
	return (
		<div className='grid grid-cols-2 gap-3 border max-w-640 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 min-w-475'>
			{articles.map((article) => (
				<div
					className='headline-view flex m-5 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all hover:border border-black cursor-pointer'
					key={uuid()}
				>
					<div className='headline-image h-full w-full mr-5'>
						<img
							className='rounded-l-lg h-full w-full'
							src={article.urlToImage === null ? noimage : article.urlToImage}
							alt={`${article.title} 이미지`}
						/>
					</div>
					<div className='headline-title p-2 flex align-middle items-center'>
						{/* <p>{article.publishedAt.toLocaleString()}</p> */}
						<p className='text-sm'>{article.title}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default HeadlineView
