import React from 'react';

export default function ContactSimple() {
  return (
    <section id="contact" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can work together on your next project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information:</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:p.budhwar@gmail.com" className="text-blue-600 hover:underline">
                    p.budhwar@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+919350569323" className="text-blue-600 hover:underline">
                    +91 9350569323
                  </a>
                </li>
                <li>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a 
                    href="https://www.linkedin.com/in/prateek-budhwar-212a92314/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/prateek-budhwar-212a92314
                  </a>
                </li>
                <li>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a 
                    href="https://github.com/budprat" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/budprat
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-gray-700">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out directly through any of the contact methods listed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}