import React from 'react';

function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Resume</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>
          At StackFX Creative, my dedication to web innovation has been a cornerstone of our operations since 2023. Through the development of web applications leveraging JavaScript, React, and Node.js, our team has cultivated a 30% uptick in client user engagement. This success stems from a client-centric approach, ensuring that each solution is tailored to the distinctive business objectives of our partners.
        </p>
        <p>
          As a multimedia developer, my experience extends to elevating websites with responsive design and interactive multimedia content, utilizing HTML, CSS, and JavaScript. Our endeavors prioritize high availability and seamless user experiences, reflecting my commitment to technical excellence and creative problem-solving. Fluent in multiple languages, I utilize this diverse skill set to foster communication and collaboration across global platforms.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Founder, Web Developer</strong> - StackFX Creative (January 2023 - Present)
            <p>Spearheaded the development and deployment of several web applications, utilizing technologies like JavaScript, React, and Node.js. Improved client websites' performance and user experience, leading to a 30% increase in user engagement. Collaborated with clients to gather requirements and deliver custom solutions that align with their business objectives.</p>
          </li>
          <li>
            <strong>Multimedia Developer</strong> - RJ Pyles Designs (January 2021 - Present)
            <p>Developed and maintained interactive, responsive websites using HTML, CSS, and JavaScript. Integrated multimedia content into web platforms, enhancing user interaction and visual appeal. Managed website updates and troubleshooting, ensuring high availability and minimal downtime.</p>
          </li>
          <li>
            <strong>Junior Web Developer</strong> - Freelance (October 2018 - Present)
            <p>Designed and implemented custom web solutions for diverse clients, focusing on functionality, scalability, and user experience. Utilized a wide range of technologies including PHP, WordPress, and MySQL to meet specific client needs. Provided ongoing maintenance and support, ensuring websites remained up-to-date and secure.</p>
          </li>
          <li>
            <strong>Testing and Outreach Specialist</strong> - The Pride Center (February 2017 - November 2017)
            <p>Provided HIV and Hep C testing, education, and counseling in various off-site locations. Facilitated single session interventions with high-risk populations to encourage dialogue for safer sex practices.</p>
          </li>
          <li>
            <strong>Hospital Corpsman/EMT</strong> - US Navy (March 2008 - October 2011)
            <p>Provided primary medical care to over 2,000 marines and sailors. Managed medical records and supplies. Worked independently in Japanese fire stations and improved emergency response efficiency.</p>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-2">
          <li>
            <strong>Computer Software Engineering</strong> - Digital Film Academy (September 2022 - August 2023)
          </li>
          <li>
            <strong>Not Completed, Mandarin, Portuguese, French</strong> - University of Kansas (2006 - 2008)
          </li>
          <li>
            <strong>High School Diploma, Foreign Languages</strong> - Blue Valley West HS (2003 - 2006)
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Data Analysis</li>
          <li>UI/UX Design</li>
          <li>Project Management</li>
          <li>Language Proficiency: French, Spanish, Italian, Brazilian Portuguese, German, Swedish, Arabic, Hebrew, Mandarin Chinese, Japanese, Icelandic</li>
        </ul>
      </div>

      <div className="text-center mt-6">
        <a href="/resume.pdf" download="Ryan_Pyles_Resume.pdf" className="inline-block p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">Download Resume (PDF)</a>
      </div>
    </div>
  );
}

export default Resume;
