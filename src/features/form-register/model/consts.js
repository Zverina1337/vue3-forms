import {ref} from "vue";

const animals = ref([
    'cat',
    'dog',
    'bird',
    'bear',
])

const eats = ref([
    'pizza',
    'sushi',
    'burger',
])

const hasFavouriteAnimalOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
])

const hasFavouriteEatOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
])

export {
    animals,
    eats,
    hasFavouriteAnimalOptions,
    hasFavouriteEatOptions
}