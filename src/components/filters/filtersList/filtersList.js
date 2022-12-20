/* eslint-disable quotes */
/* eslint-disable indent */
import filtersColumn from "../filtersColumn/filtersColumn";
import { sortByIngredient, sortByAppliance, sortByUstensile } from "../../../utils/sort";
import configFilter from "../../../configs/filters";

/**
 *  On boucle sur les 3 filtres (ingredient, appareil et ustensil).
 *  Puis on itère sur un seul filtre
 *  Filtrer les listes des recettes
 */
const filtersList = (recipes) => {
    const filters = [
        {
          type: 'ingredient',
          container: '#ingredient-list-menu',
          values: sortByIngredient(recipes),
          config: configFilter.ingredient,
        },
        {
          type: 'appliance',
          container: '#appliance-list-menu',
          values: sortByAppliance(recipes),
          config: configFilter.appliance,
        },
        {
          type: 'ustensil',
          container: '#ustensil-list-menu',
          values: sortByUstensile(recipes),
          config: configFilter.ustensil,
        },
    ];

    for (let i = 0; i < filters.length; i++) {
        const filter = filters[i];
        filtersColumn(recipes, filter);
    }

};
export default filtersList;
