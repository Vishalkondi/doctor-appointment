import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// ❌ Removed Pricing import
// import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
                Healthcare made simple
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">
                  anytime, anywhere
                </span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>

              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-emerald-600 text-white">
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, i) => (
              <Card key={i}>
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FIXED PRICING SECTION */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Consultation Packages
          </h2>

          {/* ✅ Custom Pricing UI instead of Clerk */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Free consultation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Priority booking + video consult
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlimited consultations
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Credit Info */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Stethoscope className="mr-2" />
                Credit System
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul>
                {creditBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent>
                  <h4 className="text-white">{t.name}</h4>
                  <p className="text-muted-foreground">{t.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Button asChild size="lg">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}