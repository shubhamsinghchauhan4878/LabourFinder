import { Card } from "@/components/ui/card"
import { Search, MapPin, Users, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Services",
      description: "Browse or search for the service you need in your area.",
    },
    {
      icon: Users,
      title: "View Workers",
      description: "See verified workers with ratings, reviews, and availability.",
    },
    {
      icon: MapPin,
      title: "Book & Confirm",
      description: "Select your preferred worker and confirm the booking instantly.",
    },
    {
      icon: CheckCircle,
      title: "Get It Done",
      description: "Worker arrives on time. Rate and review after completion.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How it works</h2>
          <p className="text-muted-foreground">Get your jobs done in 4 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="p-6 bg-card border-border h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{step.description}</p>
                    </div>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
