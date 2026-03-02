/**
 * Austrian Tax & Rate Configuration — PLACEHOLDER VALUES
 * Update from BMF / WKO / AK when official rates change.
 */
export const TAX_CONFIG = {
  year: 2024,
  brackets: [
    { from: 0, to: 12816, rate: 0 },
    { from: 12816, to: 20818, rate: 0.20 },
    { from: 20818, to: 34513, rate: 0.30 },
    { from: 34513, to: 66612, rate: 0.40 },
    { from: 66612, to: 99266, rate: 0.48 },
    { from: 99266, to: 1000000, rate: 0.50 },
    { from: 1000000, to: Infinity, rate: 0.55 },
  ],
  svRate: 0.1763,
  maxSVBasis: 6060,
  payments: 14,
  geringfuegig: 518.44,
  steuerfreiZuverdienst: 730,
  studentLimit: 15000,
  fuelPrice: 1.65,
  avgConsumption: 7,
  maintPerKm: 0.05,
  klimaticketMonthly: 91,
  workingDays: 21,
  rentShare: 0.30,
  richtwert: {
    wien: 6.67, niederoesterreich: 6.85, oberoesterreich: 7.23,
    salzburg: 9.22, tirol: 8.14, vorarlberg: 10.25,
    kaernten: 7.81, steiermark: 9.43, burgenland: 6.09,
  } as Record<string, number>,
};
