import { Box, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Box className="text-white" size={20} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Storyfreak</h4>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Build beautiful React applications with our comprehensive component library. 
              TypeScript-ready, accessible, and designed for modern web development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-150"
                data-testid="link-github"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-150"
                data-testid="link-npm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113V5.323z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-150"
                data-testid="link-twitter"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Documentation</h5>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-getting-started"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-components"
                >
                  Components
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-theming"
                >
                  Theming
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-examples"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-help-center"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-community"
                >
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-contact"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-150"
                  data-testid="link-report-issues"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Storyfreak. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-600 text-sm transition-colors duration-150"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-600 text-sm transition-colors duration-150"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
