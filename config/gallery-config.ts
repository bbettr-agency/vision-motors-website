// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY — real Vision Motors & The Engine Shop / Vision Motors photography.
//
//  Every image below was shot on site in Wonderboom South, Pretoria. Alt text
//  describes what is ACTUALLY visible — no keyword stuffing, and an engine is
//  never called a gearbox.
//
//  FACT-GATE / PRIVACY: images with readable customer plates were redacted
//  before optimisation; images carrying RMI/MIWA signage, "Ranger/BT-50
//  specialist" claims, or OLD/obsolete branch addresses on signage were
//  EXCLUDED entirely (archived out of /public). Nothing here publishes a
//  fact-gated claim through photography.
//
//  width/height are the real optimised dimensions so next/image reserves space
//  and the grid is CLS-free.
// ─────────────────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "workshop"
  | "engine"
  | "engineshop"
  | "diagnostics"
  | "team"
  | "office";

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  workshop: "Workshop",
  engine: "Engine Work",
  engineshop: "The Engine Shop",
  diagnostics: "Diagnostics",
  team: "Team at Work",
  office: "Office",
};

/** Filter order — only categories that actually have photographs. */
export const galleryCategoryOrder: GalleryCategory[] = [
  "workshop",
  "engine",
  "engineshop",
  "diagnostics",
  "team",
  "office",
];

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  categories: GalleryCategory[];
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/vision-motors-reconditioned-engine-pretoria.jpg",
    alt: "A reconditioned engine long block on a stand at The Engine Shop / Vision Motors, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["engine", "engineshop"],
  },
  {
    src: "/images/gallery/vision-motors-engine-shop-interior-pretoria.jpg",
    alt: "Inside The Engine Shop / Vision Motors, with engines on the benches in Wonderboom South, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["engineshop", "engine"],
  },
  {
    src: "/images/gallery/vision-motors-engine-bay-strip-pretoria.jpg",
    alt: "A vehicle with its front end stripped down for engine work on a two-post lift at Vision Motors, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["engine", "workshop"],
  },
  {
    src: "/images/gallery/vision-motors-technician-vehicle-prep-pretoria.jpg",
    alt: "A Vision Motors technician in a branded jacket preparing a customer vehicle in Wonderboom South, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["team"],
  },
  {
    src: "/images/gallery/vision-motors-vehicle-on-lift-pretoria.jpg",
    alt: "A vehicle raised on a two-post lift in the Vision Motors workshop, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["workshop"],
  },
  {
    src: "/images/gallery/vision-motors-engine-removal-pretoria.jpg",
    alt: "A vehicle with the front removed for engine work in a Vision Motors service bay, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["engine", "workshop"],
  },
  {
    src: "/images/gallery/vision-motors-reception-lounge-pretoria.jpg",
    alt: "The customer waiting lounge and reception at Vision Motors, Wonderboom South, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["office"],
  },
  {
    src: "/images/gallery/vision-motors-engine-strip-down-pretoria.jpg",
    alt: "An engine block stripped down on the bench at The Engine Shop / Vision Motors, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["engine", "engineshop"],
  },
  {
    src: "/images/gallery/vision-motors-ford-ranger-inspection-pit-pretoria.jpg",
    alt: "A bakkie over the inspection pit in the workshop at Vision Motors, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["workshop"],
  },
  {
    src: "/images/gallery/vision-motors-wheel-alignment-lift-pretoria.jpg",
    alt: "A bakkie raised on the alignment lift, seen from the workshop office at Vision Motors, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["workshop"],
  },
  {
    src: "/images/gallery/vision-motors-aircon-service-pretoria.jpg",
    alt: "Air-conditioning service and regas equipment in use at Vision Motors, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["diagnostics"],
  },
  {
    src: "/images/gallery/vision-motors-outdoor-service-bay-pretoria.jpg",
    alt: "Two vehicles up for repair in the outdoor service bay at Vision Motors, Wonderboom South, Pretoria",
    width: 1600,
    height: 1200,
    categories: ["team", "workshop"],
  },
  {
    src: "/images/gallery/vision-motors-workshop-tool-trolley-pretoria.jpg",
    alt: "Workshop tools and equipment ready for use at Vision Motors, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["workshop"],
  },
  // Existing on-site photographs, folded in to round out diagnostics / team / office.
  {
    src: "/images/vision-motors-technicians-diagnosis-pretoria.jpg",
    alt: "Two Vision Motors technicians diagnosing a vehicle together in the workshop, Wonderboom South, Pretoria",
    width: 971,
    height: 1280,
    categories: ["diagnostics", "team"],
  },
  {
    src: "/images/vision-motors-diagnostic-scanner-pretoria.jpg",
    alt: "A diagnostic scanner and interface used for electronic fault finding at Vision Motors, Pretoria",
    width: 1280,
    height: 960,
    categories: ["diagnostics"],
  },
  {
    src: "/images/vision-motors-technician-engine-repair-pretoria.jpg",
    alt: "A Vision Motors technician in branded uniform working on an engine in the workshop, Wonderboom South, Pretoria",
    width: 1086,
    height: 1448,
    categories: ["team", "engine"],
  },
  {
    src: "/images/vision-motors-waiting-area-pretoria.jpg",
    alt: "The customer waiting area at Vision Motors, Wonderboom South, Pretoria",
    width: 1200,
    height: 1600,
    categories: ["office"],
  },
];
