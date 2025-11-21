
import React from "react";
import { FaFileInvoice, FaUserShield, FaLandmark, FaHospital, FaWater, FaTree } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaFileInvoice className="w-12 h-12 text-blue-600" />,
    title: "Online Tax Payment",
    description: "Pay your municipal taxes easily online with secure transactions.",
  },
  {
    id: 2,
    icon: <FaUserShield className="w-12 h-12 text-green-600" />,
    title: "Citizen Registration",
    description: "Register new residents and update citizen information digitally.",
  },
  {
    id: 3,
    icon: <FaLandmark className="w-12 h-12 text-yellow-600" />,
    title: "Property Management",
    description: "Manage land and property records efficiently and transparently.",
  },
  {
    id: 4,
    icon: <FaHospital className="w-12 h-12 text-red-600" />,
    title: "Health Services",
    description: "Access municipal health services and appointments online.",
  },
  {
    id: 5,
    icon: <FaWater className="w-12 h-12 text-cyan-600" />,
    title: "Water & Sanitation",
    description: "Request water connections and report sanitation issues easily.",
  },
  {
    id: 6,
    icon: <FaTree className="w-12 h-12 text-green-700" />,
    title: "Environmental Services",
    description: "Participate in waste management, tree plantation, and green initiatives.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Online Municipal Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our municipality provides a variety of online services to make life easier for citizens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
