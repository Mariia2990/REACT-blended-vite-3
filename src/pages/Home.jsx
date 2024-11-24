import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setErrorMsg('');
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countriesData={countries} />
        {isLoading && <Loader />}
        {errorMsg && <p>{errorMsg}</p>}
      </Container>
    </Section>
  );
};
