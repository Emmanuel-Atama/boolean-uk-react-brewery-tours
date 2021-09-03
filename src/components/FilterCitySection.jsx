export default function FilterCitySection(props) {
  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autoCompete="off">
        <label htmlFor="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select name="filter-by-type" id="filter-by-type">
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button className="clear-all-btn">clear all</button>
      </div>

      {props.cities.map((city) => {
        // console.log("Inside filter map: ", city);
        return (
          <form id="filter-by-city-form">
            <input type="checkbox" name={city.city} value={city.city} />
            <label htmlFor={city.city}>{city.city}</label>
          </form>
        );
      })}
    </aside>
  );
}
