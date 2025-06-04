import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/slices/countrySlice";
import "./index.css";
const ROWS_TO_SHOW = 6;
const COLS_PER_ROW = 3;

const CountryCard = () => {
  const dispatch = useDispatch();
  const { countries, selectedRegion, status } = useSelector(
    (state) => state.country
  );
  const [visibleRows, setVisibleRows] = useState(ROWS_TO_SHOW);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  useEffect(() => {
    setVisibleRows(ROWS_TO_SHOW);
  }, [selectedRegion]);

  const filteredCountries =
    selectedRegion === "All"
      ? countries
      : countries.filter((c) => c.region === selectedRegion);

  const visibleCountries = filteredCountries.slice(
    0,
    visibleRows * COLS_PER_ROW
  );

  return (
    <Container className="mt-4">
      <Row className="justify-content-between">
        {visibleCountries.map((country, index) => (
          <Col md={5} sm={12} xs={12} className="mb-4 p-0 w-48" key={index}>
            <Card className="h-100 country-card">
              <div className="d-flex align-items-center gap-10">
                <Card.Img
                  variant="top"
                  src={country.flag}
                  alt={country.name}
                  className="country-flag"
                />
                <Card.Body className="w-100">
                  <Card.Title className="mb-1">{country.name}</Card.Title>
                  <Card.Text className="mb-0">{country.region}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {visibleCountries.length < filteredCountries.length && (
        <div className="text-center mb-4 p-0">
          <Button
            className="btn-load-more"
            onClick={() => setVisibleRows(visibleRows + ROWS_TO_SHOW)}
          >
            Load more
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CountryCard;
