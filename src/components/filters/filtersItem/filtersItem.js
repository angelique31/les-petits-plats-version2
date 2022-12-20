import { tagsItem} from "../../tags/tagsItem/tagsItem";
/**
 * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients
 */
const filtersItem = (name, container, index, type, recipes, config) =>{
    const id = `${type}-${index}`;
    const component =  `<li class="${type}" id="${id}">${name}</li>`;
    container.insertAdjacentHTML('beforeEnd', component);
    
    const componentId = document.getElementById(id);
    componentId.addEventListener('click', () => {
        tagsItem(componentId, recipes, type, config);
    });
}
export default filtersItem;
