import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">
                Find trusted service workers in your area
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect instantly with verified local professionals for plumbing, electrical work, cleaning, repairs,
                and more. Get the job done right, on time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base flex items-center gap-2">
                Find Workers
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base bg-transparent">
                Become a Worker
              </Button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Verified Workers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50k+</p>
                <p className="text-sm text-muted-foreground">Jobs Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xl">🔧</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Plumbing</p>
                  <p className="text-sm text-muted-foreground">Fast & Reliable</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">⚡</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Electrical</p>
                  <p className="text-sm text-muted-foreground">Licensed Professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xl">✨</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cleaning</p>
                  <p className="text-sm text-muted-foreground">Thorough & Trusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
