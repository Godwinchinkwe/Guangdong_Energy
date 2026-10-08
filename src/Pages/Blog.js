import { Link } from 'react-router-dom';
const posts=[['Industrial Power Equipment Buying Guide','A practical checklist for dealers evaluating generator engines and transformer suppliers.'],['Oil-Immersed Transformers: What Buyers Should Confirm','Key technical and commercial questions to ask before placing a transformer order.'],['Choosing Generator Equipment for 100–500 kVA Applications','How to frame your application requirements before requesting a supplier quotation.'],['Building a Reliable Power Equipment Supply Chain','What distributors should evaluate beyond product price when selecting a manufacturing partner.']];

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Blog / News</div>
          <h1>Power equipment insights for professional buyers.</h1>
          <p className="lead">
            A publishing structure ready for company news, product updates and technical education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          {posts.map(([title, text], i) => (
            <article className="card blog-card" key={title}>
              <div className="date">Industry insight · 2026</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="product-link">Article placeholder →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Company news belongs here.</h2>
            </div>
            <div>
              <p>
                Add verified announcements, exhibitions, factory updates, product launches and distributor stories as the business develops its online presence.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
