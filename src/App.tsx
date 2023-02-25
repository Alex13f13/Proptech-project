import { useGetCompetitorByPageQuery } from "./services/competitorsApi"

export default function App() {
  const { data, error, isLoading } = useGetCompetitorByPageQuery(1)
  return (
    <div>
      Hello world
    </div>
  )
}