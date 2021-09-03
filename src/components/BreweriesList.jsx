export default function BreweriesList(props) {
  return (
    <article>
      <ul className="breweries-list">
        {props.cities.map((states, index) => {
          // console.log("Inside breweries Map: ", states);
          return (
            <li key={index}>
              <h2>{states.name}</h2>
              <div className="type">{states.brewery_type}</div>
              <section className="address">
                <h3>Address:</h3>
                <p>{states.street ?? "No Street Address Recorded"}</p>
                <p>
                  <strong>
                    {states.city}, {states.postal_Code}
                  </strong>
                </p>
              </section>
              <section className="phone">
                <h3>Phone:</h3>
                <p>{states.phone ?? "No Phone Number Recorded"}</p>
              </section>
              <section className="link">
                <a href={states.website_url} target="_blank">
                  Visit Website
                </a>
              </section>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
