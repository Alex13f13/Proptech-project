export const propertyTypes = [
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
  return propertyTypes[type - 1];
}
