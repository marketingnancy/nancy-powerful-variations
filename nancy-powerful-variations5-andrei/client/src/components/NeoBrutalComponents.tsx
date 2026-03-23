import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const NeoButton = ({ className, variant = "default", ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      className={cn(
        "neo-brutal-border neo-brutal-shadow neo-brutal-button font-bold uppercase tracking-wide rounded-none",
        variant === "default" && "bg-primary text-white hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "bg-white text-foreground hover:bg-accent",
        className
      )}
      {...props}
    />
  );
};

export const NeoCard = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  return (
    <Card
      className={cn(
        "neo-brutal-border neo-brutal-shadow rounded-none bg-white overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export const NeoBadge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn(
      "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black bg-secondary text-secondary-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      className
    )}>
      {children}
    </span>
  );
};

export const NeoAccordion = ({ items, className }: { items: { title: string; content: string }[]; className?: string }) => {
  return (
    <Accordion type="single" collapsible className={cn("w-full space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-none">
          <AccordionTrigger className="neo-brutal-border neo-brutal-shadow bg-white px-6 py-4 hover:bg-accent hover:no-underline data-[state=open]:bg-secondary transition-all">
            <span className="font-bold text-lg text-left">{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className="neo-brutal-border border-t-0 bg-white px-6 py-4 text-base leading-relaxed">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
