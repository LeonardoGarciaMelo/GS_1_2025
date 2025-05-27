export function analyzeRisk(humidity: number, slope: number): string {
  if (humidity > 80 && slope > 35) return "Alto Risco";
  if (humidity >= 60 || slope >= 20) return "Médio Risco";
  return "Baixo Risco";
}
