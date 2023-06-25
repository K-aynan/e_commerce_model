import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab ut
          hic aut placeat fuga odit? Explicabo quis recusandae vitae ducimus,
          enim optio deserunt voluptas rem itaque ipsam earum officia qui ad.
          Ratione ut vero consectetur nemo placeat! Ipsum quae nemo ipsa enim,
          distinctio animi, sunt culpa molestiae earum voluptates suscipit,
          deserunt nam. Saepe error odit atque facilis, quasi et placeat
          laboriosam modi quod recusandae tempora cumque corporis dicta
          necessitatibus itaque officia esse, nisi illo iusto maiores explicabo
          quidem inventore! Ex neque repudiandae quibusdam sit. Iure officiis
          sint in laboriosam numquam, cum, neque nulla atque maxime rerum,
          dolorem illum quo.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Lorem</b>, ipsum dolor sit <br />
          <b>amet</b> consectetur adipisicing elit. <br />
          <b>Distinctio </b> optio laudantium <br />
          <b>sed sit animi</b> ea vitae, excepturi, <br />
          <b>harum voluptatum </b>laboriosam saepe! <br />
          <b>Odio adipisci</b> quaerat enim necessitatibus! <br />
          <b>Vero, perferendis</b> necessitatibus. Ipsam!
        </p>
      </Section>
      <Gallery name="jogo teste" defaultCover={residentEvil} />
    </>
  )
}

export default Product
