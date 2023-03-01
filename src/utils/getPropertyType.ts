export const propertyTypeNames = [
  "Ático",
  "Dúplex",
  "Chalet",
  "Piso",
  "Chalet Pareado",
  "Chalet Adosado",
  "Estudio",
  "Finca Rústica",
  "Habitación",
]

export default function getPropertyType(type: number): string {
  return propertyTypeNames[type - 1];
}
