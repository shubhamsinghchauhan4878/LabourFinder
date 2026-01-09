import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      role: "Customer",
      content: "Found a plumber within minutes and the job was done perfectly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      role: "Customer",
      content: "Very impressed with the verification process. I felt completely safe with the electrician.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      role: "Worker",
      content: "Amazing platform! I get consistent bookings and the customers are respectful.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by customers and workers</h2>
          <p className="text-muted-foreground">See why thousands trust Sahayak</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
