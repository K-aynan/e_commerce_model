import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import startWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4 is well known as Biohazard 4 in Japan dude',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'it´s the farm my little guy, let$quot;s finish them',
    title: 'Diablo',
    system: 'windows, PS5',
    infos: ['18%', 'R$ 200,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'ma-ma-ma-magic, piw piw, pow pow',
    title: 'Zelda',
    system: 'windows, Nintendo Switch',
    infos: ['22%', 'R$ 150,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'From a place far away from here...',
    title: 'Star Wars',
    system: 'windows, ',
    infos: ['5%', 'R$ 100,00'],
    image: startWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Resident Evil 4 is well known as Biohazard 4 in Japan dude',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Resident Evil 4 is well known as Biohazard 4 in Japan dude',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Resident Evil 4 is well known as Biohazard 4 in Japan dude',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Resident Evil 4 is well known as Biohazard 4 in Japan dude',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
