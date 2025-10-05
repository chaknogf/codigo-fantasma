import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary pixel-text"
            style={{ fontFamily: "var(--font-press-start)", lineHeight: "2" }}
          >
            {"> CONTACTO"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="mailto:chaknogf@gmail.com" className="group">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-auto py-6 border-2 border-secondary hover:border-primary hover:bg-primary/10 transition-all bg-transparent"
              >
                <div className="flex flex-col items-center gap-3">
                  <Mail className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                  <span
                    className="text-xs pixel-text text-foreground"
                    style={{ fontFamily: "var(--font-press-start)", lineHeight: "1.8" }}
                  >
                    EMAIL
                  </span>
                  <span className="text-[0.6rem] text-muted-foreground break-all">chaknogf@gmail.com</span>
                </div>
              </Button>
            </a>

            <a href="https://wa.me/50257627051" target="_blank" rel="noopener noreferrer" className="group">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-auto py-6 border-2 border-accent hover:border-primary hover:bg-primary/10 transition-all bg-transparent"
              >
                <div className="flex flex-col items-center gap-3">
                  <Phone className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                  <span
                    className="text-xs pixel-text text-foreground"
                    style={{ fontFamily: "var(--font-press-start)", lineHeight: "1.8" }}
                  >
                    WHATSAPP
                  </span>
                  <span className="text-[0.6rem] text-muted-foreground">+502 57627051</span>
                </div>
              </Button>
            </a>
          </div>

          <div className="pt-12 border-t-2 border-border">
            <p
              className="text-xs text-muted-foreground pixel-text"
              style={{ fontFamily: "var(--font-press-start)", lineHeight: "2.5" }}
            >
              © 2025 CODIGOFANTASMA
              <br />
              TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
