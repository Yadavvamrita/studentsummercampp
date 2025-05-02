import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page headline', () => {
  render(<App />);
  const headline = screen.getByText(/the best place to learn and play for kids/i);
  expect(headline).toBeInTheDocument();
});

import './App.css';

<div>
  <div className="background-container">
    <h2>Summer Camp 2024</h2>
    <p>
      Summer Camp IIITD is a wonderful initiative by the students of the Indraprastha Institute of
      Information Technology, Delhi (IIIT-Delhi) that offers a unique blend of education and
      entertainment for students from government schools. The aim of the summer camp is to provide
      an environment where these students can learn, explore, and have fun while developing their
      confidence, aspirations, and skills in various fields.
    </p>
    <p>
      Through a range of engaging activities, workshops, and sessions, Summer Camp IIITD seeks to
      instill a sense of curiosity and a love for learning in these young minds, helping them to grow
      into well-rounded individuals who are equipped to face the challenges of the future with
      confidence and enthusiasm.
    </p>
    <p>
      Summer camp is scheduled from <strong>May 27, 2024 to June 22, 2024</strong> at the
      <a href="https://iiitd.ac.in" target="_blank" rel="noopener noreferrer"> IIIT-Delhi campus</a>!
    </p>
  </div>

  <div className="background-box">
    <h2>Organized by Dream Advance in collaboration with IIIT Delhi Innovation & Incubation Center</h2>
    <p>Venue: IIIT Delhi Campus, New Delhi</p>
    <p>Dates:</p>
    <ul>
      <li>Batch 1: 25th May – 5th June 2025</li>
      <li>Batch 2: 15th June – 25th June 2025</li>
    </ul>
    <p>Time: 09:00 AM – 12:00 PM</p>
  </div>
</div>
