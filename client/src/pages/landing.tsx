import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bus, Users, BarChart3, Clock, CheckCircle2 } from "lucide-react";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Bus className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">BusConnect</h1>
                <p className="text-xs text-muted-foreground">Solution SaaS Transport</p>
              </div>
            </div>
            <Button onClick={handleLogin} data-testid="button-login">
              Se connecter
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
            Digitalisez votre compagnie de transport
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La première plateforme SaaS en Côte d'Ivoire pour gérer vos réservations de tickets de bus en ligne.
            Rejoignez les compagnies de transport qui ont digitalisé leur activité.
          </p>
          <div className="flex gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={handleLogin} data-testid="button-get-started" className="px-8">
              Commencer gratuitement
            </Button>
            <p className="text-sm text-muted-foreground">
              Déjà inscrit ?{" "}
              <button
                onClick={handleLogin}
                className="text-primary font-medium hover-elevate"
                data-testid="button-login-link"
              >
                Se connecter
              </button>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-card-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Gestion des trajets</h3>
                <p className="text-sm text-muted-foreground">
                  Créez et gérez vos lignes de bus avec horaires et tarifs en quelques clics
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/30">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Réservations en ligne</h3>
                <p className="text-sm text-muted-foreground">
                  Permettez à vos clients de réserver leurs billets 24h/24 depuis leur téléphone
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Tableaux de bord</h3>
                <p className="text-sm text-muted-foreground">
                  Suivez vos revenus, taux d'occupation et performances en temps réel
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/30">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Gain de temps</h3>
                <p className="text-sm text-muted-foreground">
                  Automatisez la gestion de vos réservations et réduisez les erreurs manuelles
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="border-card-border bg-card">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-card-foreground">
                    Pourquoi choisir BusConnect ?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Interface simple et intuitive</p>
                        <p className="text-sm text-muted-foreground">
                          Conçue pour les compagnies de transport, sans formation complexe
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Support local en français</p>
                        <p className="text-sm text-muted-foreground">
                          Une équipe disponible pour vous accompagner en Côte d'Ivoire
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Paiement mobile intégré</p>
                        <p className="text-sm text-muted-foreground">
                          Compatible avec Orange Money, MTN Money et cartes bancaires
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Données sécurisées</p>
                        <p className="text-sm text-muted-foreground">
                          Vos informations et celles de vos clients sont protégées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center space-y-4 p-8 rounded-lg border border-border bg-background">
                    <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Rejoignez-nous
                    </p>
                    <p className="text-5xl font-bold text-foreground">50+</p>
                    <p className="text-lg text-muted-foreground">Compagnies de transport</p>
                    <Button onClick={handleLogin} size="lg" className="mt-4" data-testid="button-join">
                      Commencer maintenant
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center space-y-6 py-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground">
            Prêt à moderniser votre compagnie de transport ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Créez votre compte gratuitement et découvrez comment BusConnect peut transformer votre activité
          </p>
          <Button onClick={handleLogin} size="lg" className="px-8" data-testid="button-cta">
            Créer mon compte gratuitement
          </Button>
        </section>
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Bus className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-card-foreground">BusConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BusConnect. Solution SaaS pour compagnies de transport en Côte d'Ivoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
