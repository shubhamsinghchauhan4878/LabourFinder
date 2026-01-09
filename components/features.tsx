import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Shield, Star } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Verified Workers",
      description: "All workers are background checked and verified. Work with confidence.",
    },
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book a worker in minutes. No long waiting times or complicated processes.",
    },
    {
      icon: Star,
      title: "Rated & Reviewed",
      description: "See real ratings from customers. Choose based on verified feedback.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "If you're not satisfied, we'll make it right. Your satisfaction matters.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why choose Sahayak</h2>
          <p className="text-muted-foreground">Everything you need for trustworthy, quality service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-md transition">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
