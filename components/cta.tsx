import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to get started?</h2>
          <p className="text-primary-foreground/90 text-lg">
            Join thousands of customers finding trusted workers. It takes just 2 minutes to sign up.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8 text-base flex items-center justify-center gap-2">
            Find Workers Now
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-base bg-transparent"
          >
            Become a Worker
          </Button>
        </div>
      </div>
    </section>
  )
}
