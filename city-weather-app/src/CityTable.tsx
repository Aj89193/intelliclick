import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Table, InputGroup, FormControl, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface City {
  name: string;
  country: string;
  timezone: string;
}

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchCities = useCallback(async () => {
    if (!hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20`
      );
      
      const newCities = response.data.results.map((record: any) => ({
        name: record.ascii_name,
       
        country: record.cou_name_en,
        timezone: record.timezone
      }));
      // console.log(cities)
      setCities((prevCities) => [...prevCities, ...newCities]);
      setHasMore(response.data.records.length > 0);
    } catch (err) {
      setError('Failed to fetch cities');
    } finally {
      setLoading(false);
    }
  }, [page, hasMore]);

  useEffect(() => {
    fetchCities();
    setError(null)
  }, [fetchCities]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mt-4">
      <h2>Weather in Every City</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a city..."
          aria-label="Search"
          onChange={handleSearch}
          value={search}
        />
      </InputGroup>
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city, index) => (
            <tr key={index}>
              <td>
                <Link to={`/weather/${city.name}`}>{city.name}</Link>
              </td>
              <td>{city.country}</td>
              <td>{city.timezone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {loading && <Spinner animation="border" />}
      {!loading && hasMore && (
        <Button variant="primary" onClick={() => setPage(prevPage => prevPage + 1)}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default CityTable;
