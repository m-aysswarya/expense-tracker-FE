import { scrollToSection } from '../../utils/helper'
const Navigation = () => {

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-3 py-2 shadow-md sm:px-6 sm:py-3">
                <div className="flex items-center space-x-1">
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="px-2 py-1 sm:px-3 sm:py-2 rounded-full text-sm text-gray-700 hover:bg-violet-100 hover:text-violet-600 transition"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("features")}
                        className="px-2 py-1 sm:px-3 sm:py-2 rounded-full text-sm text-gray-700 hover:bg-violet-100 hover:text-violet-600 transition"
                    >
                        Features
                    </button>
                    <button
                        onClick={() => scrollToSection("cta")}
                        className="px-2 py-1 sm:px-3 sm:py-2 rounded-full text-sm text-gray-700 hover:bg-violet-100 hover:text-violet-600 transition"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
