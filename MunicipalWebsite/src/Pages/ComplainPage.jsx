import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ComplainPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    
        form.current,
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
      )
      .then(
        (result) => {
          alert("✅ Complaint sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send. Please try again.");
          console.log("Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-8 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-lg border border-slate-200"
      >
        <h1 className="text-2xl md:text0-3xl font-bold text-center mb-6 text-blue-80">
          Submit Your Complaint
        </h1>

        {/* Hidden Recipient Email (matches template variable) */}
        <input type="hidden" name="to_email" value="ankitpuri985@gmail.com" />

        <label className="block text-slate-700 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          required
          className="w-full p-3 mb-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your email"
        />

        <label className="block text-slate-700 font-semibold mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full p-3 mb-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your full name"
        />

        <label className="block text-slate-700 font-semibold mb-1">
          Type
        </label>
        <select
          name="user_type"
          required
          className="w-full p-3 mb-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Select</option>
          <option value="Resident">Resident</option>
          <option value="Traveller">Traveller</option>
        </select>

        <label className="block text-slate-700 font-semibold mb-1">
          Address
        </label>
        <input
          type="text"
          name="user_address"
          className="w-full p-3 mb-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your address"
        />

        <label className="block text-slate-700 font-semibold mb-1">
          Complaint
        </label>
        <textarea
          name="message"
          required
          rows="4"
          className="w-full p-3 mb-6 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Write your complaint here..."
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02]"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplainPage;
