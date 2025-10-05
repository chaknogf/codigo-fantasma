import { Code, Smartphone, Rocket, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "PAGINAS WEB",
    description: "Sitios web modernos y responsivos",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "WEB APPS",
    description: "Aplicaciones web interactivas",
    color: "text-secondary",
  },
  {
    icon: Rocket,
    title: "OPTIMIZACION",
    description: "Rendimiento y velocidad maxima",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "SOPORTE",
    description: "Mantenimiento continuo",
    color: "text-primary",
  },
]

export function Services() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary pixel-text"
          style={{ fontFamily: "var(--font-press-start)", lineHeight: "2" }}
        >
          {"> SERVICIOS"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 group scanline"
            >
              <div className="space-y-4">
                <service.icon
                  className={`w-12 h-12 ${service.color} group-hover:animate-[pulse-glow_1s_ease-in-out_infinite]`}
                />
                <h3
                  className="text-sm font-bold text-foreground pixel-text"
                  style={{ fontFamily: "var(--font-press-start)", lineHeight: "1.8" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs text-muted-foreground pixel-text leading-relaxed"
                  style={{ fontFamily: "var(--font-press-start)", lineHeight: "2" }}
                >
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
