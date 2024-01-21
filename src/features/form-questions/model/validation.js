import {useForm} from "vee-validate";
import {array, boolean, number, object, string} from "yup";

const { handleSubmit, errors, values, defineField } = useForm({
    validationSchema: object({
        likeAnimals: boolean(),
        favouriteAnimals: array().of(object({
            label: string(),
            value: number()
        })),
        likeFruits: boolean(),
        favouriteFruits: array().of(object({
            label: string(),
            value: number()
        })),
        likeMusic: boolean(),
        favouriteMusicGenres: array().of(object({
            label: string(),
            value: number()
        })),
        likeYoutube: boolean(),
        likeVK: boolean(),
        likeInstagram: boolean(),
        likeTwitch: boolean(),
        likeOK: boolean(),
    }),
    initialValues: {
        likeAnimals: 0,
        favouriteAnimals: "cat",
        likeFruits: 0,
        favouriteFruits: "apple",
        likeMusic: 0,
        favouriteMusicGenres: "rock",
        likeYoutube: false,
        likeVK: false,
        likeInstagram: false,
        likeTwitch: false,
        likeOK: false,
    }
})

const [ likeAnimals ] = defineField('likeAnimals');
const [ favouriteAnimals ] = defineField('favouriteAnimals');
const [ likeFruits ] = defineField('likeFruits');
const [ favouriteFruits ] = defineField('favouriteFruits');
const [ likeMusic ] = defineField('likeMusic');
const [ favouriteMusicGenres ] = defineField('favouriteMusicGenres');
const [ likeYoutube ] = defineField('likeYoutube');
const [ likeVK ] = defineField('likeVK');
const [ likeInstagram ] = defineField('likeInstagram');
const [ likeTwitch ] = defineField('likeTwitch');
const [ likeOK ] = defineField('likeOK');

const submit = handleSubmit(values => {
    console.log(values)
})

export {
    errors,
    values,
    likeAnimals,
    favouriteAnimals,
    likeFruits,
    favouriteFruits,
    likeMusic,
    favouriteMusicGenres,
    likeYoutube,
    likeVK,
    likeInstagram,
    likeTwitch,
    likeOK,
    submit
}