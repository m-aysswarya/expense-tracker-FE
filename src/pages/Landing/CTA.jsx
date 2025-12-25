import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star } from "lucide-react";
import { scrollToSection } from '../../utils/helper'

export default function CTA() {
    const navigate = useNavigate()
    return (
        <section className="py-24 bg-gradient-to-r from-violet-600  via-violet-500 to-violet-500 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* Intro Badge */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                            <Star className="w-4 h-4 fill-current" />
                            Join 10,000+ users simplifying money tracking
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Start Tracking
                            <br />
                            <span className="relative">
                                Your Money Today
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full" />
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            No credit card required. Start writing your financial entries and see
                            beautiful graphs appear instantly.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <button
                            onClick={() => navigate("/login")}
                            className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition">
                            Start Tracking
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition">
                            Explore
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/70">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">10K+</div>
                            <div className="text-sm">Entries Created</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">4.8★</div>
                            <div className="text-sm">User Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">5K+</div>
                            <div className="text-sm">Charts Generated</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">2 sec</div>
                            <div className="text-sm">Average Entry Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
