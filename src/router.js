import Vue from "vue";
import Router from "vue-router";
import CharacterList from "./components/CharacterList.vue";
import AddCharacter from "./components/AddCharacter.vue";
import SearchCharacters from "./components/SearchCharacters.vue";
import Character from "./components/Character.vue";

Vue.use(Router);

export default new Router({
mode: "history",
routes: [
    {
        path: "/",
        name: "characters",
        alias: "/characters",
        component: CharacterList,
        children:[
            {
                path: "/characters/:id",
                name: "character-details",
                component: Character,
                props: true
            }
        ]
    },
    {
        path: "/add",
        name: "add",
        component: AddCharacter
    },
    {
        path: "/search",
        name: "search",
        component: SearchCharacters
    }
]
});