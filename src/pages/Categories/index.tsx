import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionsGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionsGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionsGames} title="Ação" background="gray" />
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
