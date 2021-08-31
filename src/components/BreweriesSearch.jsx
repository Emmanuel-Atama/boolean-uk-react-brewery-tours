function BreweriesSearch() {
  return (
    <header className="search-bar">
      <form id="search-breweries-form" autocomplete="off">
        <label htmlFor="search-breweries">
          <h2>Search breweries:</h2>
        </label>
        <input
          id="search-breweries"
          name="search-breweries"
          type="text"
          value=""
        />
      </form>
    </header>
  );
}
export default BreweriesSearch;
