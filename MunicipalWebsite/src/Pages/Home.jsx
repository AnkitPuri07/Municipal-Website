import EmployeeSection from '../Components/EMployeeSection/EmployeeSection';
import { useRef } from "react";
import Notices from '../Components/Notices/Notices';
import NoticesInfo from '../NoticesInfo/NoticesInfo';
import LinkCards from '../Components/LinkCards/LinkCards';
import OnlineServices from "../assets/OnlineServices.jpg"; 
import Complaint from "../assets/Complaint.jpg";
import suggest from "../assets/suggest.jpg"
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.JPG";
import MayorMessage from '../Components/MayorMessage/MayorMessage';
import Mayor from "../assets/Mayor.jpg";
import Hero3 from "../assets/Hero3.jpg";
import Hero4 from "../assets/Hero4.jpg";
import VisitCard from '../Components/VisitCard/VisitCard';
import visitData from '../visitdata/visitdata';
import aboutData from '../AboutData/AboutData';
import About from '../Components/About/About';
import { Link } from 'react-router';

function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-200 text-slate-800">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-4 p-4">
  {/* Left big section */}
  <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden rounded-2xl group">
    <img
      src={Hero1}
      alt="Hero1"
      className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white drop-shadow-lg px-4 pointer-events-none">
      <h2 className="text-lg md:text-2xl font-bold">
        WELCOME TO DUDHAULI MUNICIPALITY
      </h2>
      <h3 className="text-sm md:text-base text-slate-100 opacity-90">
        A vibrant city of natural beauty, warm people, and a pleasant climate
      </h3>
    </div>
  </div>

  {/* Right side - 3 stacked sections */}
  <div className="w-full md:w-1/2 flex flex-col gap-4">
    <div className="flex gap-4 h-32 md:h-48">
      <div className="w-1/2 relative overflow-hidden rounded-2xl group">
        <img
          src={Hero2}
          alt="Hero2"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-2 text-white drop-shadow-md pointer-events-none">
          <h3 className="md:text-xl text-sm font-semibold text-slate-100">
            A piece of heaven on earth
          </h3>
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden rounded-2xl group">
        <img
          src={Hero3}
          alt="Hero3"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-2 text-white drop-shadow-md pointer-events-none">
          <h3 className="lg:text-xl text-sm font-semibold text-slate-100">
            Rivers, lakes, and hills with stunning views
          </h3>
        </div>
      </div>
    </div>

    <div className="w-full relative h-32 md:h-48 overflow-hidden rounded-2xl group">
      <img
        src={Hero4}
        alt="Hero4"
        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute bottom-4 left-2 text-white drop-shadow-md pointer-events-none">
        <h3 className="text-base md:text-lg font-semibold text-slate-100">
          Quality hotels, excellent services, and warm hospitality
        </h3>
      </div>
    </div>
  </div>
</div>


        {/* Section Titles */}
        <h2 className="text-4xl text-slate-800 text-center mt-3 mb-3 font-bold">Catch Our Services</h2>

        {/* Service Cards */}
        <div className="flex flex-col gap-4 items-evenly md:flex-row md: justify-evenly text-slate-800">

          <Link to="/Services">
          <LinkCards
            img={OnlineServices}
            title="Online Services"
            description="Quick access to services for everyone"
          />
          </Link> 

          <Link to="/Complaints">
          <LinkCards
            img={Complaint}
            title="Make Complaints"
            description="Report issues about services for improvement"
          />
          </Link>

          <Link to="Suggestions">
          <LinkCards
            img={suggest}
            title="Give Suggestions"
            description="Submit suggestions for better services"
          />
          </Link>
          
        </div>

        <MayorMessage />

        <h2 className="text-4xl text-slate-800 text-center mt-3 mb-3 font-bold">Best places to VISIT</h2>

        {/* Visit section */}
        <div className="flex flex-col justify-evenly flex-wrap lg:flex-row md:flex-row text-slate-800">
          {visitData.slice(0, 4).map((place) => (
            <VisitCard
              key={place.id}
              title={place.title}
              description={place.description}
              location={place.location}
              img={place.image}
            />
          ))}
        </div>
        <div className='flex flex-wrap m-4 justify-center items-center'>
               <Link to="places">
            <button className="relative px-6 py-3 cursor-pointer font-semibold text-slate-900 bg-gradient-to-r 
            from-emerald-300 via-emerald-400 to-emerald-500 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1
             transition-all duration-300">
            <span className="relative z-10">Show More Places</span>
            <span className="absolute inset-0 rounded-xl bg-emerald-200 opacity-0 transition-opacity
             duration-300 hover:opacity-30"></span>
          </button>
          </Link>
        </div>
           

        {/* Notice Section */}
        <h2 className="text-4xl text-slate-800 text-center mt-3 mb-3 font-bold">Recent Notices</h2>
        {NoticesInfo.slice(0, 2).map((notice) => (
          <Notices
            key={notice.id}
            title={notice.title}
            description={notice.description}
            img={notice.img}
            category={notice.category}
            date={notice.date}
          />
        ))}

        <div className='flex flex-wrap justify-center items-center m-4'>
          <Link to="Notices">
                  <button className="relative px-6 py-3 font-semibold text-white
                   bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md transition-all 
                   duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-500 hover:to-blue-700">
          <span className="relative z-10">Show More Notices</span>
          <span className="absolute inset-0 rounded-full bg-blue-400 
          opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40"></span>
        </button>

          </Link>
        </div>

        <h2 className="text-4xl text-slate-800 text-center mt-3 mb-3 font-bold">About</h2>
        <div className="flex flex-wrap flex-col md:flex-row justify-evenly text-slate-800">
          {aboutData.map((data) => (
            <About
              key={data.key}
              title={data.title}
              description={data.description}
              img={data.image}
            />
          ))}
        </div>

        <h2 className="text-4xl text-slate-800 text-center mt-3 mb-3 font-bold">Employees</h2>
        <EmployeeSection />
      </div>
    </>
  );
}

export default Home;
