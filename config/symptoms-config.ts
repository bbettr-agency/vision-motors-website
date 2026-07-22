// ─────────────────────────────────────────────────────────────────────────────
//  SYMPTOM BAND — the customer's entry point, in the customer's words.
//
//  Rationale (approved plan §6, structural change 1): visitors do not arrive
//  thinking "I need a gearbox overhaul". They arrive thinking "it's making a
//  noise". Every competitor leads with a service taxonomy — the business's
//  mental model, not the customer's. Leading with symptoms matches the actual
//  arrival state and feeds the highest-intent long-tail search cluster.
//
//  Each item pre-fills the booking form's "Service Required" field.
// ─────────────────────────────────────────────────────────────────────────────

import type { SymptomItem } from "@/types/site";

export const symptomsConfig: SymptomItem[] = [
  {
    label: "Warning light is on",
    icon: "TriangleAlert",
    presetService: "Vehicle Diagnostics & Fault Finding",
  },
  {
    label: "Gearbox is slipping or jerking",
    icon: "Settings2",
    presetService: "Gearbox Repairs",
  },
  {
    label: "Engine is knocking or smoking",
    icon: "Cog",
    presetService: "Engine Reconditioning & Repairs",
  },
  {
    label: "Car won't start",
    icon: "BatteryWarning",
    presetService: "Vehicle Diagnostics & Fault Finding",
  },
  {
    label: "Noise when I brake",
    icon: "CircleGauge",
    presetService: "Brakes, Clutches & Mechanical Repairs",
  },
  {
    label: "It's overheating",
    icon: "Thermometer",
    presetService: "Vehicle Diagnostics & Fault Finding",
  },
  {
    label: "Another workshop couldn't find it",
    icon: "Search",
    presetService: "Vehicle Diagnostics & Fault Finding",
  },
  {
    label: "It just needs a service",
    icon: "Wrench",
    presetService: "Car Servicing & Maintenance",
  },
];
