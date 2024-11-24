import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('query') ?? '';
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!region) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setErrorMsg('');
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [region]);

  const getRegion = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={getRegion} />
        <CountryList countriesData={countries} />
        {isLoading && <Loader />}
        {errorMsg && <p>{errorMsg}</p>}
      </Container>
    </Section>
  );
};
