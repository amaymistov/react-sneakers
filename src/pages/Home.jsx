import Card from '../components/Card'

function Home({
								items,
								searchValue,
								onAddToCart,
								onAddToFavorite,
								onSearchValue,
								setSearchValue
							}) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between'>
				<h1>Все кроссовки</h1>
				<div className='search-block d-flex'>
					<img src='/img/search.svg' alt='Search' />
					{searchValue &&
						<img className='removeButton' onClick={() => setSearchValue('')} src='/img/removeBtn.svg'
								 alt='Clear' />}
					<input onChange={onSearchValue} value={searchValue} type='text' placeholder='Поиск' />
				</div>
			</div>
			<div className='d-flex items flex-wrap'>
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue))
					.map((item) => (
						<Card
							key={item.id}
							onAddCard={(item) => onAddToCart(item)}
							onAddFavorites={(item) => onAddToFavorite(item)}
							{...item}
						/>
					))}
			</div>
		</div>
	)
}

export default Home