import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sahayak</h3>
            <p className="text-sm opacity-75">Find trusted service workers in your area</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Workers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Earn Money
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 opacity-75">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2026 Sahayak. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100">
              Privacy
            </Link>
            <Link href="#" className="hover:opacity-100">
              Terms
            </Link>
            <Link href="#" className="hover:opacity-100">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
