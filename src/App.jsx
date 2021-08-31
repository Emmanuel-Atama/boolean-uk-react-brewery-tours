import { useState } from "react";
import BreweriesList from "./components/BreweriesList";
import BreweriesSearch from "./components/BreweriesSearch";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

export default function App() {
  const [statesInput, setStatesInput] = useState("");
  const [stateSubmit, setStateSubmit] = useState(null);
  const [userInput, setUserInput] = useState();
  const [breweries, setBreweries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({ type: "", city: [], search: "" });

  console.log("Inside State: ", {
    statesInput,
    stateSubmit,
    breweries,
    cities,
    filters
  });

  function fetchBrewereies() {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${userInput}&per_page=50`
    )
      .then((res) => res.json())
      .then((statesInput) => {
        console.log("Inside setStateInput: ", statesInput);

        setStatesInput(statesInput);
      });
  }

  const handleStateSubmit = (event) => {
    // console.log("Inside handleStateSubmit: ", handleStateSubmit);
    event.preventDefault();
    fetchBrewereies();
  };

  const handleUserInput = (event) => {
    // console.log("Inside handleNameInput: ", event.target.value);

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
        <FilterSection />
        <h1>List of Breweries</h1>
        <BreweriesSearch />
        <BreweriesList statesInput={statesInput} />
      </main>
    </>
  );
}
