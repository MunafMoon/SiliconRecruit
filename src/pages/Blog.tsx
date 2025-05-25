import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote Work: Trends and Predictions',
      excerpt: 'As remote work becomes more established, we examine the emerging trends and make predictions about the future of distributed teams.',
      image: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Sarah Johnson',
      date: 'May 15, 2023',
      readTime: '8 min read',
      category: 'Workplace Trends'
    },
    {
      id: 2,
      title: 'How AI is Transforming the Recruitment Process',
      excerpt: 'Artificial intelligence is revolutionizing how companies find and hire talent. Learn about the latest AI innovations in recruiting.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Michael Chen',
      date: 'April 28, 2023',
      readTime: '6 min read',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Building a Diverse and Inclusive Workforce',
      excerpt: 'Strategies for creating a more diverse and inclusive workplace that drives innovation and business success.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Emily Rodriguez',
      date: 'April 10, 2023',
      readTime: '7 min read',
      category: 'Diversity & Inclusion'
    },
    {
      id: 4,
      title: 'The Great Resignation: What Employers Need to Know',
      excerpt: 'Understanding the factors driving employee turnover and strategies for improving retention in the wake of the Great Resignation.',
      image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'David Patel',
      date: 'March 22, 2023',
      readTime: '9 min read',
      category: 'Employee Retention'
    },
    {
      id: 5,
      title: 'Top Skills Employers Will Look for in 2023',
      excerpt: 'A comprehensive analysis of the most in-demand skills that employers will be seeking in candidates this year.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Jennifer Wu',
      date: 'March 5, 2023',
      readTime: '5 min read',
      category: 'Career Development'
    },
    {
      id: 6,
      title: 'Navigating Salary Negotiations: Tips for Employers and Candidates',
      excerpt: 'Expert advice on handling salary negotiations effectively, whether you\'re hiring or job seeking.',
      image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Robert Kim',
      date: 'February 18, 2023',
      readTime: '7 min read',
      category: 'Negotiations'
    }
  ];

  const categories = [
    'All Categories',
    'Workplace Trends',
    'Technology',
    'Diversity & Inclusion',
    'Employee Retention',
    'Career Development',
    'Negotiations',
    'Leadership',
    'Recruitment'
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-[#192B59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Recruitment Insights</h1>
            <p className="text-xl text-blue-200">
              Expert perspectives, industry trends, and practical advice for employers and job seekers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  {[1, 2, 3].map((page) => (
                    <a
                      key={page}
                      href="#"
                      className={`inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                        page === 1 ? 'text-blue-600 hover:bg-blue-50' : 'text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for articles..."
                  />
                  <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`block px-3 py-2 rounded-md ${
                          index === 0
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Featured Post */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Post</h3>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Featured post"
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  The Impact of Digital Transformation on Recruitment
                </h4>
                <p className="text-gray-600 mb-3">
                  How digital tools and platforms are revolutionizing the way companies recruit and candidates find jobs.
                </p>
                <Link
                  to="/blog/featured"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              {/* Newsletter */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest recruitment insights and industry news delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email address"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;