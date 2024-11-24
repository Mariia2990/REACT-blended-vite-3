import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countriesData }) => {
  return (
    <Grid>
      {countriesData.map(country => (
        <GridItem key={country.id}>
          <Link>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
