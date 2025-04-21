import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Marie Dupont',
    photo: '/images/marie.jpg', // Place the image in public/images/
    rating: 5,
    comment: "Molière m'a vraiment aidée à améliorer mes résultats scolaires.",
  },
  {
    name: 'Jean Martin',
    photo: '/images/jean.jpg',
    rating: 4,
    comment: 'Les cours personnalisés sont excellents et très efficaces.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Témoignages</h2>
      <div className="testimonialList">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonialCard">
            <img src={testimonial.photo} alt={testimonial.name} className="photo" />
            <h3>{testimonial.name}</h3>
            <div className="rating">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p>"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;