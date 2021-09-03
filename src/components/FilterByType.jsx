function FilterByType(props) {
  let filteredBreweries = props.breweries;

  const options = ["micro", "regional", "brewpub"];

  // options.forEach((option) => {
  //  if (props.filters.type === option) {
  //     option.selected = true;
  //  }
  //   })

  console.log(
    "Inside filteredBreweries: ",
    filteredBreweries,
    props.filters.type
  );

  return (
    <form id="filter-by-type-form" autoCompete="off">
      <label htmlFor="filter-by-type">
        <h3>Type of Brewery</h3>
      </label>
      <select
        onChange={props.handleFilter}
        name="filter-by-type"
        id="filter-by-type"
      >
        <option value="">Select a type...</option>
        <option value="micro">Micro</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
    </form>
  );
}
export default FilterByType;
