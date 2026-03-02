/**
 * Austrian Tax & Rate Configuration — 2026 VALUES
 * Sources: BMF (bmf.gv.at), WKO, ÖGK, Finanz.at
 * Last updated: March 2026
 */
export const TAX_CONFIG = {
  year: 2026,
  // Income tax brackets 2026 (§ 33 EStG, adjusted for inflation 1.733%)
  brackets: [
    { from: 0,       to: 13539,   rate: 0 },
    { from: 13539,   to: 21992,   rate: 0.20 },
    { from: 21992,   to: 36458,   rate: 0.30 },
    { from: 36458,   to: 70365,   rate: 0.40 },
    { from: 70365,   to: 104859,  rate: 0.48 },
    { from: 104859,  to: 1000000, rate: 0.50 },
    { from: 1000000, to: Infinity, rate: 0.55 },
  ],
  // SV employee share 2026 (WKO Beitragswesen Dienstnehmer 2026)
  // KV 3.87% + PV 10.25% + ALV 3% + WBF 0.50% + AK 0.50% = 18.07% (full ALV)
  // ALV reduced for low income: <=2225: 0%, 2225-2427: 1%, 2427-2630: 2%, >2630: 3%
  svRate: 0.1807,
  svRateNoALV: 0.1512,  // without ALV (KV+PV+WBF+AK)
  alvThresholds: [
    { to: 2225, rate: 0 },
    { to: 2427, rate: 0.01 },
    { to: 2630, rate: 0.02 },
    { to: Infinity, rate: 0.03 },
  ],
  maxSVBasis: 6930,      // Höchstbeitragsgrundlage monthly 2026 (ÖGK)
  maxSVSonderzahlungen: 13860, // jährlich für Sonderzahlungen
  payments: 14,
  // Verkehrsabsetzbetrag 2026
  verkehrsabsetzbetrag: 496,
  // Geringfügigkeitsgrenze 2026 (unchanged from 2025 per Budgetbegleitgesetz)
  geringfuegig: 551.10,
  steuerfreiZuverdienst: 730,
  studentLimit: 15000,
  // Transport
  fuelPrice: 1.55,
  avgConsumption: 7,
  maintPerKm: 0.05,
  klimaticketMonthly: 91.25, // €1095/12
  workingDays: 21,
  // Rent
  rentShare: 0.30,
  richtwert: {
    wien: 6.67, niederoesterreich: 6.85, oberoesterreich: 7.23,
    salzburg: 9.22, tirol: 8.14, vorarlberg: 10.25,
    kaernten: 7.81, steiermark: 9.43, burgenland: 6.09,
  } as Record<string, number>,
};
