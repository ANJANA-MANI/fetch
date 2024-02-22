import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Api() {
  const [products, setProducts] = useState([]);
  const base_url = 'https://dummyjson.com/products';

  // API FETCH
  const fetchData = async () => {
    const result = await fetch(base_url)
      .then((result) => result.json()) // json => array
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Now you can log 'products' here, within the scope of the component function
  console.log(products);

  return <div className='card'>{
    products.map(i=>(
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={i.thumbnail} />
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
          {i.description}.
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    ))
}</div>;
}

export default Api;
