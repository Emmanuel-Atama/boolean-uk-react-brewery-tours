function BreweriesList(props) {
  return (
    <article>
      <ul className="breweries-list">
        {props.statesInput.map((states) => {
          console.log("Inside breweries Map: ", states);
          return (
            <li>
              <h2>{props.name}</h2>
              <div className="type">{props.brewery_type}</div>
              <section className="address">
                <h3>Address:</h3>
                <p>{props.street}</p>
                <p>
                  <strong>
                    {props.city}, {props.postal_Code}
                  </strong>
                </p>
              </section>
              <section className="phone">
                <h3>Phone:</h3>
                <p>{props.phone}</p>
              </section>
              <section className="link">
                <a href={props.website_url} target="_blank">
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
export default BreweriesList;
