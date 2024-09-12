const Search = (value, onChange) => {
    return (
        <input 
            type="search"
            placeholder="영화를 입력하세요"
            value={value}
            onChange={onChange}
        />
    );
}

export default Search;