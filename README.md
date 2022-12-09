**_New card adding guideline:_**

0. Before all please be sure that you don't have any changes in your local project and do `git pull origin master`
   to update your local project.
   If you have uncommited local changes please `commit` it and do `git pull origin master` and then do `git push origin master` if you didn't get any `conflicts`
   If you got `conflicts` after you ran `git pull origin master`, please message to @qscgyjqscgyj

1. Copy any card directory in `service/cards/lib` and rename it for new card name
   copy `service/cards/lib/fool`
   rename `service/cards/lib/fool_copy` to `service/cards/lib/<new_card_name>`

2. Replace data inside `service/cards/lib/<new_card_name>` with new card data

3. Replace image inside `service/cards/lib/<new_card_name>` with new card image

4. Replace const name in `service/cards/lib/<new_card_name>` with new card name
   `export const fool` should become `export const <new_card_name>`

5. Add `<new_card_name>` in `services/cards/cards.ts` returning array
   `return [fool, magician];` should become `return [fool, magician, <new_card_name>];`

6. To be shure that `<new_card_name>` has been added in imports on top of the `services/cards/cards.ts` file

```
    import { fool } from './lib/fool/card';
    import { magician } from './lib/magician/card';
    import { CardData } from './types';
```

    should become

```
    import { fool } from './lib/fool/card';
    import { magician } from './lib/magician/card';
    import { <new_card_name> } from './lib/<new_card_name>/card';
    import { CardData } from './types';
```

7. Save all you changes
