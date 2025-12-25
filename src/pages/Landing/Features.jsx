import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";
import {
    Edit3,
    BarChart3,
    PieChart,
    TrendingUp,
    Zap,
    Download
} from "lucide-react";

const features = [
    {
        icon: Edit3,
        title: "Quick Text Entry",
        description: "Write down your income and expenses in plain text. No complex forms or categories required.",
    },
    {
        icon: BarChart3,
        title: "Auto-Generated Charts",
        description: "Your entries instantly transform into beautiful bar charts showing income vs expenses.",
    },
    {
        icon: PieChart,
        title: "Expense Breakdown",
        description: "See exactly where your money goes with intuitive pie charts and visual breakdowns.",
    },
    {
        icon: TrendingUp,
        title: "Trend Analysis",
        description: "Track your financial trends over time with smart line graphs and progress indicators.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Add transactions in seconds with our streamlined text-based interface.",
    },

    {
        icon: Download,
        title: "Export Reports",
        description: "Download your financial data and charts for tax prep or financial planning.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-100 lg:mx-8 mx-2">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Write It.
                        <span className="text-primary"> See It. </span>
                        Understand It.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The simplest way to track money - write simply, visualize beautifully
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg hover:shadow-violet-200 transition-transform duration-300 hover:-translate-y-2 bg-white border border-gray-200"
                        >
                            <CardHeader>
                                {/* Icon Container */}
                                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>

                            {/* Description */}
                            <CardContent>
                                <CardDescription className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );

}