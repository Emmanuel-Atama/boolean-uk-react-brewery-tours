import { useState } from "react";
import BreweriesList from "./components/BreweriesList";
import BreweriesSearch from "./components/BreweriesSearch";
import FilterCitySection from "./components/FilterCitySection";
import Header from "./components/Header";

export default function App() {
  const [userInput, setUserInput] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({ type: "", city: [], search: "" });

  console.log("Inside State: ", {
    userInput,
    breweries,
    cities,
    filters
  });

  function FetchBrewereies() {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${userInput}&per_page=25`
    )
      .then((res) => res.json())
      .then((cities) => {
        // console.log("Inside setStateInput: ", cities);

        setCities(cities);
      });
  }

  const handleStateSubmit = (event) => {
    // console.log("Inside handleStateSubmit: ", handleStateSubmit);
    event.preventDefault();
    FetchBrewereies();
  };

  const handleUserInput = (event) => {
    // console.log("Inside handleNameInput: ", event.target.value);

    setUserInput(event.target.value);
  };

  const handleFilter = (event) => {
    console.log("Inside handlefilter: ", event.target.value);

    setUserInput(event.target.value);
  };

  return (
    <>
      <Header
        userInput={userInput}
        handleUserInput={handleUserInput}
        handleStateSubmit={handleStateSubmit}
      />
      <main>
        <FilterCitySection cities={cities} />
        <h1>List of Breweries</h1>
        <BreweriesSearch />
        <BreweriesList cities={cities} />
      </main>
    </>
  );
}
