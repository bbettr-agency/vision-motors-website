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
    presetService: "Complex Fault Finding",
  },
  {
    label: "Gearbox is slipping or jerking",
    icon: "Settings2",
    presetService: "Automatic & Manual Gearboxes",
  },
  {
    label: "Engine is knocking or smoking",
    icon: "Cog",
    presetService: "Engine Reconditioning",
  },
  {
    label: "Car won't start",
    icon: "BatteryWarning",
    presetService: "Complex Fault Finding",
  },
  {
    label: "Noise when I brake",
    icon: "CircleGauge",
    presetService: "Brake Repairs",
  },
  {
    label: "It's overheating",
    icon: "Thermometer",
    presetService: "Complex Fault Finding",
  },
  {
    label: "Another workshop couldn't find it",
    icon: "Search",
    presetService: "Complex Fault Finding",
  },
  {
    label: "It just needs a service",
    icon: "Wrench",
    presetService: "Vehicle Servicing",
  },
];
