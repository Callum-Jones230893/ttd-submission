export type MemoryCardType = {
  id: string
  name: string
  image: string
  status: string
}

export const memoryCards: MemoryCardType[] = [
  {
    id: "1",
    name: "Pikachu",
    image: "pikachu.png",
    status: "unflipped"
  },
  {
    id: "2",
    name: "Pikachu",
    image: "pikachu.png",
    status: "unflipped"
  },  
  {
    id: "3",
    name: "Bulbasaur",
    image: "bulbasaur.png",
    status: "unflipped"
  },
  {
    id: "4",
    name: "Bulbasaur",
    image: "bulbasaur.png",
    status: "unflipped"
  },
  {
    id: "5",
    name: "Charmander",
    image: "charmander.png",
    status: "unflipped"
  },
  {
    id: "6",
    name: "Charmander",
    image: "charmander.png",
    status: "unflipped"
  },
  {
    id: "7",
    name: "Squirtle",
    image: "squirtle.png",
    status: "unflipped"
  },
  {
    id: "8",
    name: "Squirtle",
    image: "squirtle.png",
    status: "unflipped"
  }
]

export const shuffleCards = () => {
  return [...memoryCards].sort(() => Math.random() - 0.5)
}