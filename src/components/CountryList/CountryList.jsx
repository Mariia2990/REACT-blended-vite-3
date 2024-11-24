import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countriesData }) => {
  const location = useLocation();
  return (
    <Grid>
      {countriesData.map(country => (
        <GridItem key={country.id}>
          <Link state={location} to={`/country/${country.id}`}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
