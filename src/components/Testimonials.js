import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 80px 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 60px;
  color: #666;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  left: 30px;
  background: #ff6b35;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const TestimonialText = styled.p`
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 25px;
  color: #555;
  font-size: 1rem;
  margin-top: 15px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ReviewerPhoto = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
`;

const ReviewerDetails = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h4`
  margin: 0;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ReviewerLocation = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

const Rating = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 5px;
`;

const Star = styled.span`
  color: #ffc107;
  font-size: 1rem;
`;

const TripType = styled.div`
  background: #2c5530;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: inline-block;
  margin-top: 10px;
`;

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our 2-week journey through Sri Lanka exceeded all expectations. From the ancient temples of Kandy to the wildlife safaris in Yala, every moment was perfectly organized. Kumara, our guide, was incredibly knowledgeable and made us feel like family.",
      name: "Sophie & Antoine Martin",
      location: "Melbourne, Australia",
      trip: "Complete Sri Lanka Tour",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "The train ride through the tea plantations was absolutely magical! MaiGlobe arranged everything perfectly, from boutique accommodations to authentic local experiences. We can't wait to return to this beautiful island.",
      name: "James Wilson",
      location: "London, UK",
      trip: "Highland Tea Country",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "As wildlife photographers, we were amazed by the safari experiences. Seeing leopards in Yala and elephants at Minneriya was incredible. The team's attention to detail and local connections made all the difference.",
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      trip: "Wildlife Adventure",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "From the moment we contacted MaiGlobe until our return home, everything was flawless. The cultural insights, beautiful accommodations, and genuine warmth of the Sri Lankan people made this our best vacation ever.",
      name: "Michael & Sarah Chen",
      location: "Toronto, Canada",
      trip: "Cultural Triangle Explorer",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "The luxury boutique hotels were stunning, and the personalized service throughout our honeymoon was exceptional. Climbing Sigiriya at sunrise and relaxing on pristine beaches - it was pure magic!",
      name: "Isabella & Marco Rossi",
      location: "Milan, Italy",
      trip: "Luxury Boutique Escape",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Hiking Adam's Peak and exploring the national parks was the adventure of a lifetime. The local guides were fantastic, and every day brought new discoveries. Highly recommend for active travelers!",
      name: "David Thompson",
      location: "Sydney, Australia",
      trip: "Adventure Trekking Tour",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <SectionTitle>What Our Travelers Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it - hear from the adventurers who have experienced the magic of Sri Lanka with us.
        </SectionSubtitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteIcon>"</QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              
              <ReviewerInfo>
                <ReviewerPhoto bg={testimonial.photo} />
                <ReviewerDetails>
                  <ReviewerName>{testimonial.name}</ReviewerName>
                  <ReviewerLocation>{testimonial.location}</ReviewerLocation>
                  <Rating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i}>★</Star>
                    ))}
                  </Rating>
                </ReviewerDetails>
              </ReviewerInfo>
              
              <TripType>{testimonial.trip}</TripType>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials; 