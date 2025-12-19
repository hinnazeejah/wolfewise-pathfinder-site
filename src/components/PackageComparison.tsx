import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const PackageComparison = () => {
  const features = [
    {
      service: "Coaching Sessions",
      clarity: "2",
      pathfinder: "10",
      launchPad: "20",
    },
    {
      service: "Family Meetings",
      clarity: "1 intake",
      pathfinder: "1 intake + 2 check-ins",
      launchPad: "1 intake + 4 monthly + post-decision",
    },
    {
      service: "Assessment",
      clarity: "Basic",
      pathfinder: "Comprehensive",
      launchPad: "Comprehensive",
    },
    {
      service: "Pathway Exploration",
      clarity: "Overview",
      pathfinder: "In-depth",
      launchPad: "In-depth",
    },
    {
      service: "College List/ Career Research",
      clarity: false,
      pathfinder: true,
      launchPad: true,
    },
    {
      service: "Essay Review",
      clarity: false,
      pathfinder: "1-2 drafts",
      launchPad: "3+ drafts",
    },
    {
      service: "Resume Help",
      clarity: false,
      pathfinder: false,
      launchPad: true,
    },
    {
      service: "Interview Prep",
      clarity: false,
      pathfinder: false,
      launchPad: "Mock practice",
    },
    {
      service: "Application Support",
      clarity: false,
      pathfinder: "Timeline & strategy",
      launchPad: "Full execution",
    },
    {
      service: "Financial Aid Guidance",
      clarity: false,
      pathfinder: false,
      launchPad: true,
    },
    {
      service: "Life Skills Training",
      clarity: false,
      pathfinder: "Decision-making only",
      launchPad: "Complete training",
    },
    {
      service: "Post-Decision Support",
      clarity: false,
      pathfinder: false,
      launchPad: "2 sessions",
    },
    {
      service: "Email Support",
      clarity: "Basic",
      pathfinder: "Unlimited (48hr)",
      launchPad: "Priority (24hr)",
    },
    {
      service: "Emergency Session",
      clarity: false,
      pathfinder: false,
      launchPad: "1 included",
    },
    {
      service: "Duration",
      clarity: "3-4 weeks",
      pathfinder: "3 months",
      launchPad: "4-6 months",
    },
  ];

  const renderCell = (value: string | boolean) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-primary mx-auto" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-muted-foreground mx-auto" />;
    }
    return <span className="text-foreground/80">{value}</span>;
  };

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <Card className="border-0 shadow-2xl bg-background overflow-hidden">
          <CardContent className="p-6 md:p-10 lg:p-14">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
                Package Comparison Chart
              </h2>
              <p className="text-lg md:text-xl text-primary font-semibold">
                Book by December 31, 2025
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-primary/20">
                    <TableHead className="text-foreground font-heading font-semibold text-left min-w-[180px]">
                      Service
                    </TableHead>
                    <TableHead className="text-center font-heading font-semibold text-primary min-w-[120px]">
                      Clarity
                    </TableHead>
                    <TableHead className="text-center font-heading font-semibold text-primary min-w-[140px]">
                      Pathfinder
                    </TableHead>
                    <TableHead className="text-center font-heading font-semibold text-primary min-w-[160px]">
                      Launch Pad
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow
                      key={feature.service}
                      className={index % 2 === 0 ? "bg-accent/30" : ""}
                    >
                      <TableCell className="font-medium text-foreground">
                        {feature.service}
                      </TableCell>
                      <TableCell className="text-center">
                        {renderCell(feature.clarity)}
                      </TableCell>
                      <TableCell className="text-center">
                        {renderCell(feature.pathfinder)}
                      </TableCell>
                      <TableCell className="text-center">
                        {renderCell(feature.launchPad)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {/* Clarity */}
              <Card className="border-2 border-primary/20 bg-accent/50 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    Clarity
                  </h3>
                  <p className="text-muted-foreground line-through text-sm">
                    Normally $497
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Book by 12/31/2025
                  </p>
                  <p className="text-primary font-bold text-2xl mt-2">$349.00</p>
                </CardContent>
              </Card>

              {/* Pathfinder */}
              <Card className="border-2 border-primary/20 bg-accent/50 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    Pathfinder
                  </h3>
                  <p className="text-muted-foreground line-through text-sm">
                    Normally $1,997
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Book by 12/31/2025
                  </p>
                  <p className="text-primary font-bold text-2xl mt-2">$1,197.00</p>
                </CardContent>
              </Card>

              {/* Launch Pad */}
              <Card className="border-2 border-primary/20 bg-accent/50 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    Launch Pad
                  </h3>
                  <p className="text-muted-foreground line-through text-sm">
                    Normally $3,497
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Book by 12/31/2025
                  </p>
                  <p className="text-primary font-bold text-2xl mt-2">$2,273.00</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link to="/book">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10"
                >
                  Book Your Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PackageComparison;
