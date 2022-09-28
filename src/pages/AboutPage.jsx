import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is React app to leave feedback for a product or service</p>
        <p>Version: 3.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
