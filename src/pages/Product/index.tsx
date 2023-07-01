import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Lorem</b>, {game.details.system} <br />
          <b>amet</b> {game.details.developer} <br />
          <b>Distinctio </b> {game.details.publisher} <br />
          <b>sed sit animi</b> ea vitae, excepturi, incluindo{' '}
          {game.details.languages.join(', ')} <br />!
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
