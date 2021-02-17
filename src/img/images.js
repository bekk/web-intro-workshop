const DAY = 1000 * 60 * 60 * 24;
// Bilder lastet ned fra Unsplash
// Dette er arrayet du skal liste ut
// Det inneholder bilder på formatet
// { id: 1, path: 'http://url.com', description: 'tekst til posten', alt: 'alt-tekst' }
export const posts = [{
    id: '1',
    path: './working.jpeg',
    description: 'God trøkk på jobb i dag 😎',
    alt: 'Fem personer som jobber sammen rundt et bord',
    createdDate: new Date() - DAY * 2,
    username: '@olav',
  },
  {
    id: '2',
    path: './sunset.jpeg',
    description: 'Koser meg med litt kveldsjobbing når ungene endelig er i seng',
    alt: 'En mann som arbeider på pc i solnedgang',
    createdDate: new Date() - DAY * 3,
    username: '@reidar',
  },
  {
    id: '3',
    path: './suitcase.jpeg',
    description: 'På vei til møte med ny, spennende kunde 🤩',
    alt: 'Mann med stresskoffert som går',
    createdDate: new Date() - DAY * 4,
    username: '@frithjof',
  },
  {
    id: '4',
    path: './writing.jpeg',
    description: 'Ny artikkel om frontend på vei! 💪',
    alt: 'Hands writing on a computer',
    createdDate: new Date() - DAY * 12,
    username: '@selbekk',
  },
  {
    id: '5',
    path: './office.jpeg',
    description: 'Hjemmekontoret er på plass 😍',
    alt: 'Home office',
    createdDate: new Date() - DAY * 50,
    username: '@unni',
  },]