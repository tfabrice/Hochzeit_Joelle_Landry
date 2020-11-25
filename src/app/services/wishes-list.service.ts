import { Injectable } from '@angular/core';

@Injectable()

export class WishesListService {
  getSouhaits = [
    {
      id: 1,
      nom: 'Fabice',
      date: '25.06.2020',
      message: 'Lorem ipsum dolor sit amet consectetur dipisicing elit. Ex velit iste atque ducimus quibusdam fugit molestias obcaecati cupiditate suscipit esse sint vitae architecto nesciunt, alias beatae, quidem tempore ullam dicta.'
    },
    {
      id: 2,
      nom: 'Fabice 2',
      date: '26.06.2020',
      message: 'Voici le deuxième message de l´utilisateur'
    },
    {
      id: 3,
      nom: 'Fabice 3',
      date: '27.06.2020',
      message: 'Lorem ipsum dolor sit amet consectetur dipisicing elit. Ex velit iste atque ducimus quibusdam fugit molestias obcaecati cupiditate suscipit esse sint vitae architecto nesciunt, alias beatae, quidem tempore ullam dicta.'
    },
    {
      id: 4,
      nom: 'Fabice 4',
      date: '28.06.2020',
      message: 'Voici le quatrième message de l´utilisateur'
    }
  ]
  constructor() { }
}
