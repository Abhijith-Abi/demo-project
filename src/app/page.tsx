import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-6 py-16 md:py-24">
                    <nav className="flex justify-between items-center mb-16">
                        <div className="text-2xl font-bold">Brand</div>
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="#features"
                                className="hover:text-blue-200 transition"
                            >
                                Features
                            </Link>
                            <Link
                                href="#testimonials"
                                className="hover:text-blue-200 transition"
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="#contact"
                                className="hover:text-blue-200 transition"
                            >
                                Contact
                            </Link>
                        </div>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </nav>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Build Something Amazing Today
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Launch your product with our powerful and
                                flexible platform built for modern teams.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-50 transition">
                                    Get Started
                                </button>
                                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="w-full max-w-md h-80 rounded-xl bg-white/20 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                                <span className="text-xl font-medium text-white">
                                    Hero Image
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to build modern applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                Lightning Fast
                            </h3>
                            <p className="text-gray-600">
                                Optimized for speed and performance to provide
                                the best user experience.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                Secure by Design
                            </h3>
                            <p className="text-gray-600">
                                Built with security at its core to protect your
                                data and users.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                Customizable
                            </h3>
                            <p className="text-gray-600">
                                Flexible architecture that adapts to your
                                specific requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Ready to get started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of companies that trust our platform to
                        build their products.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-50 transition">
                        Sign Up Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Brand</h3>
                            <p className="text-gray-400">
                                Building the future of web applications
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Connect</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} Your Company. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
