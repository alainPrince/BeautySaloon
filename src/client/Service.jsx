import services from './servicelist'
import '../style/service.css';
import { Link } from "react-router-dom"

function Service() {
  return (
    <main className='service-container'>
      <h5 className='service-heading'>Our service list</h5>
      <section className='service-block'>
        {services.map((service) => (
          <article className='service-card' key={service.id}>
            <img src={service.image} alt={service.name} />
            <h5>{service.name}</h5>
            <p>{service.description}</p>
            <span className='service-price'>{service.price.toLocaleString()} RWF</span>
            <Link to="/booking" state={{ selectedService: service.name }}>
              <button type="button">BOOK</button>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Service;