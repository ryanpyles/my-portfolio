import React from 'react';

function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
      <div className="mb-6">
        <p>
          Hi, I'm Ryan. I have a diverse background that spans across multiple fields and locations. I was born in Maryland, grew up in Texas, went to high school in Kansas, joined the Navy, and have lived in various places around the world including Okinawa, Japan, and Barolo, Italy.
        </p>
        <p>
          I'm passionate about languages, technology, and travel. My goal is to become a full stack web developer, data scientist, or UX/UI designer. I also enjoy baking, cooking, and spending time with my dog, Arya.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Life Timeline</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Born:</strong> Maryland</li>
          <li><strong>Grew Up:</strong> Texas</li>
          <li><strong>High School:</strong> Kansas</li>
          <li><strong>Military Service:</strong> Navy, stationed in Okinawa, JP and Camp Pendleton, CA</li>
          <li><strong>Post-Navy:</strong> Lived in Italy, Switzerland, and various US cities</li>
          <li><strong>Current:</strong> Based in Atlanta, GA</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Hobbies & Interests</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Travel</li>
          <li>Baking & Cooking</li>
          <li>Learning foreign languages</li>
          <li>Spending time with my dog, Arya</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
