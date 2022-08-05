const SearchBox = (props) => {
    return (
        <div className='flex justify-center'>
            <div className='basis-2/3 lg:basis-1/3'>
                <input className='search-box block w-full px-3 py-1.5 text-base text-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type='search' placeholder={props.placeholder} onChange={props.onSearchChange} />
            </div>
        </div>
    );
}
 
export default SearchBox;