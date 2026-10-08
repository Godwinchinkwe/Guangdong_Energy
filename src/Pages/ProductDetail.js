
import { useParams, Link } from 'react-router-dom';
import { products } from '../assets/products';

export default function ProductDetail() {
  const { slug } = useParams();

  const p = products.find((x) => x.slug === slug) || products[0];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">

       

          <div className="eyebrow">{p.category}</div>

          <h1>{p.name}</h1>

          <p className="lead">{p.description}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section">
        <div className="container product-detail">

          {/* Product Image */}
          <div className="detail-visual">
            <img
              src={p.image}
              alt={p.name}
              className="product-detail-image"
            />
          </div>

          {/* Product Information */}
          <div>
            <div className="eyebrow">Product Overview</div>

            <h2>{p.name}</h2>

            <p>{p.description}</p>

            {/* Specifications */}
            <table className="spec-table">
              <tbody>
                {p.specs?.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>
              <strong>Note:</strong> Final technical specifications should be
              confirmed against the official product datasheet before
              publication or quotation.
            </p>

            <Link className="btn btn-primary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

