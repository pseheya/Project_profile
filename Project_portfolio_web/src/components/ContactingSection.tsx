import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwqrzvv");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-mono text-center text-gray-700 mb-2">
          Thank You for Visiting My Project Website!
        </h2>
        <p className="font-mono text-center p-2">
          You can contact me on LinkedIn or check out my work on GitHub!
        </p>
        <div className="flex justify-center space-x-6 mb-6 p-3">
          <a
            href="https://www.linkedin.com/in/oksana-herasymenko-4603542a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-black px-3 py-3 rounded-full text-m font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pseheya"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-black px-3 py-3 rounded-full text-m font-mono"
          >
            GitHub
          </a>
        </div>
        <p className="text-center text-gray-600 mb-4 font-mono">
          If you want to leave some feedback, feel free to use this form.
        </p>

        {state.succeeded && (
          <p className="text-green-600 text-center mb-4">
            ✅ Thank you! Your feedback has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your feedback here..."
              rows={4}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#172121] text-white px-6 py-3 hover:bg-white hover:text-black hover:border hover:border-gray-700 rounded-full text-lg font-mono"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
