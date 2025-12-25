import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Edit3, BarChart3, PieChart } from 'lucide-react';
import { scrollToSection } from '../../utils/helper'
import ExpenseTracker3D from './ExpenseTracker3D';

export default function Hero() {
    const navigate = useNavigate()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden lg:mx-8 mx-2 ">
            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4 mt-3">
                            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-primary shadow-lg shadow-violet-200">
                                <Edit3 className="w-4 h-4" />
                                Simple Financial Tracking
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                Track Your{" "}
                                <span className="text-primary">
                                    Money
                                </span>
                                <br />
                                <span className="text-gray-500">See It Grow</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-2xl">
                                Simple text entry meets powerful visualization. Quickly jot down your income and expenses,
                                then watch beautiful graphs reveal your financial story.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition cursor-pointer">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 inline ml-2" />
                            </button>
                            <button
                                onClick={() => scrollToSection("features")}

                                className="border border-violet-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                Explore
                            </button>
                        </div>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Edit3 className="w-4 h-4 text-primary" />
                                Quick Entry
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <BarChart3 className="w-4 h-4 text-primary" />
                                Auto-Generated Graphs
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <PieChart className="w-4 h-4 text-primary" />
                                Visual Insights
                            </div>
                        </div>
                    </div>

                    {/* Right side - 3D Scene */}
                    <div className="relative h-[500px] md:h-[600px] ">
                        <ExpenseTracker3D />
                    </div>
                </div>
            </div>
        </section>
    );
}