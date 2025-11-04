import React, { useRef } from "react";
import emailjs from "emailjs-com";

function SuggestionPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1bl9lnn",        // your service ID
        "template_9c95bef",       // same template as complaint
        form.current,
        "wLZ0VGVvP3CdW9KRT"       // your public key
      )
      .then(
        (result) => {
          alert("✅ Suggestion sent successfully!");
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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-100 p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-pink-200 bg-white/80 backdrop-blur-md"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-pink-700 tracking-wide">
          Share Your Suggestion 💡
        </h1>

        {/* Hidden Recipient Email */}
        <input type="hidden" name="to_email" value="ankitpuri985@gmail.com" />

        <label className="block text-pink-800 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="from_email"
          required
          className="w-full p-3 mb-4 rounded-xl border border-pink-300 bg-white/60 focus:ring-2 focus:ring-pink-400 outline-none"
          placeholder="Enter your email"
        />

        <label className="block text-pink-800 font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full p-3 mb-4 rounded-xl border border-pink-300 bg-white/60 focus:ring-2 focus:ring-pink-400 outline-none"
          placeholder="Enter your full name"
        />

        <label className="block text-pink-800 font-semibold mb-1">Address</label>
        <input
          type="text"
          name="user_address"
          required
          className="w-full p-3 mb-4 rounded-xl border border-pink-300 bg-white/60 focus:ring-2 focus:ring-pink-400 outline-none"
          placeholder="Enter your address"
        />

        <label className="block text-pink-800 font-semibold mb-1">Type</label>
        <select
          name="user_type"
          required
          className="mb-4 rounded-xl w-full p-3 border border-pink-300 bg-white/60 focus:ring-2 focus:ring-pink-400 outline-none"
        >
          <option value="">Select</option>
          <option value="Resident">Resident</option>
          <option value="Traveller">Traveller</option>
        </select>

        <label className="block text-pink-800 font-semibold mb-1">
          Suggestion
        </label>
        <textarea
          name="message"
          required
          rows="4"
          className="w-full p-3 mb-6 rounded-xl border border-pink-300 bg-white/60 focus:ring-2 focus:ring-pink-400 outline-none"
          placeholder="Write your suggestion here..."
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}

export default SuggestionPage;
