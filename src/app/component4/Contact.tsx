import React from 'react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Custom Website Development",
    description:
      "Crafting responsive, user-friendly websites tailored to your business needs. I use the latest technologies to build fast and secure websites.",
  },
  {
    title: "UI/UX Design",
    description:
      "Specialized in designing intuitive interfaces with a focus on user experience. I aim to create engaging visuals that capture users' attention.",
  },
  {
    title: "SEO & Content Marketing",
    description:
      "Enhance your online presence with effective SEO strategies and quality content marketing. I help your site rank better and attract more traffic.",
  },
  {
    title: "Graphic Design",
    description:
      "Providing high-quality graphic design services, including logos, social media assets, and brand materials that make your business stand out.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Developing customized e-commerce websites with secure payment gateways and a smooth user experience for both you and your customers.",
  },
  {
    title: "Freelance Consulting",
    description:
      "Providing consulting for freelancers and startups on how to build their brand, enhance visibility, and manage projects efficiently.",
  },
];

export default function ContentSection() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
