import { Rocket, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Beautiful React Components{" "}
          <span className="text-primary-600">Made Simple</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A modern component library built with React, TypeScript, and TailwindCSS. 
          Create stunning user interfaces with our flexible and accessible components.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-150 font-medium flex items-center justify-center gap-2"
            data-testid="button-get-started"
          >
            <Rocket size={20} />
            Get Started
          </button>
          <button 
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 font-medium flex items-center justify-center gap-2"
            data-testid="button-view-storybook"
          >
            <BookOpen size={20} />
            View Storybook
          </button>
        </div>
      </div>
    </section>
  );
}
