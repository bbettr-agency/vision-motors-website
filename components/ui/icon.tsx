import {
  BatteryWarning,
  Car,
  CircleCheck,
  CircleGauge,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Cog,
  Disc3,
  Droplet,
  Fuel,
  Gauge,
  MapPin,
  MessagesSquare,
  Phone,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Thermometer,
  TriangleAlert,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BatteryWarning,
  Car,
  CircleCheck,
  CircleGauge,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Cog,
  Disc3,
  Droplet,
  Fuel,
  Gauge,
  MapPin,
  MessagesSquare,
  Phone,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Thermometer,
  TriangleAlert,
  Wrench,
};

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  // Safe fallback — a config typo degrades gracefully instead of crashing.
  const Component = iconMap[name] ?? Wrench;
  return <Component className={className} aria-hidden />;
}
