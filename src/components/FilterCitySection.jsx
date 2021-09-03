import ClearAllButton from "./ClearAllButton";
import FilterByType from "./FilterByType";

export default function FilterCitySection(props) {
  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <FilterByType
        filters={props.filters}
        setFilters={props.setFilters}
        breweries={props.breweries}
        handleFilter={props.handleFilter}
      />
      <ClearAllButton />
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
