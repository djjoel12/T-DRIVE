import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TrendingUp,
  Users,
  Ticket,
  Bus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  testId: string;
}

function StatCard({ title, value, icon, trend, testId }: StatCardProps) {
  return (
    <Card className="border-card-border">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground" data-testid={testId}>
              {value}
            </p>
            {trend && (
              <div className="flex items-center gap-1">
                {trend.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-600" />
                )}
                <span
                  className={`text-sm font-medium ${
                    trend.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {trend.value}%
                </span>
                <span className="text-sm text-muted-foreground">vs. mois dernier</span>
              </div>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatCardSkeleton() {
  return (
    <Card className="border-card-border">
      <CardContent className="p-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-4 w-40" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-9 w-64 mb-2" />
          <Skeleton className="h-5 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      </div>
    );
  }

  const firstName = user?.firstName || user?.email?.split("@")[0] || "Utilisateur";

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground" data-testid="text-welcome">
          Bienvenue, {firstName}
        </h1>
        <p className="text-muted-foreground">
          Voici un aperçu de votre activité de transport
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Réservations aujourd'hui"
          value="0"
          icon={<Ticket className="h-6 w-6 text-primary" />}
          testId="stat-reservations"
        />
        <StatCard
          title="Revenus du mois"
          value="0 FCFA"
          icon={<TrendingUp className="h-6 w-6 text-primary" />}
          testId="stat-revenue"
        />
        <StatCard
          title="Taux d'occupation"
          value="0%"
          icon={<Users className="h-6 w-6 text-primary" />}
          testId="stat-occupation"
        />
        <StatCard
          title="Trajets actifs"
          value="0"
          icon={<Bus className="h-6 w-6 text-primary" />}
          testId="stat-trips"
        />
      </div>

      <Card className="border-card-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold">Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Ticket className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground" data-testid="text-no-activity">
              Aucune activité pour le moment
            </p>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Commencez par créer vos trajets de bus pour que vos clients puissent effectuer des réservations
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-card-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Actions rapides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-colors"
              data-testid="button-quick-add-trip"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Bus className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left flex-1">
                <p className="font-medium text-foreground">Ajouter un trajet</p>
                <p className="text-sm text-muted-foreground">Créer une nouvelle ligne de bus</p>
              </div>
            </button>
            <button
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-colors"
              data-testid="button-quick-view-reservations"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/30">
                <Ticket className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left flex-1">
                <p className="font-medium text-foreground">Voir les réservations</p>
                <p className="text-sm text-muted-foreground">Gérer les billets vendus</p>
              </div>
            </button>
            <button
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-colors"
              data-testid="button-quick-manage-clients"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left flex-1">
                <p className="font-medium text-foreground">Gérer les clients</p>
                <p className="text-sm text-muted-foreground">Base de données clients</p>
              </div>
            </button>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Conseils pour démarrer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-foreground">Complétez votre profil</p>
                <p className="text-sm text-muted-foreground">
                  Ajoutez les informations de votre compagnie
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-foreground">Créez vos trajets</p>
                <p className="text-sm text-muted-foreground">
                  Définissez vos lignes de bus avec horaires et tarifs
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-foreground">Partagez votre lien</p>
                <p className="text-sm text-muted-foreground">
                  Vos clients pourront réserver en ligne
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
