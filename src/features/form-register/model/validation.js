import {number, object, string} from "yup";
import {useForm} from "vee-validate";

const schema = object({
    login: string().required("This field is required"),
    email: string().required("This field is required").email("Not valid E-mail"),
    phone: number().required("This field is required"),
    address: object({
        country: string(),
        city: string(),
        street: string(),
        home: number(),
    }),
    fullName: object({
        name: string().required("This field is required"),
        surname: string().required("This field is required"),
        patronymic: string().required("This field is required")
    }),
    passwords: object({
        password: string().required("This field is required"),
        repeatPassword: string().required("This field is required")
    })
})

const { values, errors, handleSubmit, defineField } = useForm({
    validationSchema: schema,
    initialValues: {
        login: '',
        email: '',
        phone: 0,
        address: {
            country: '',
            city: '',
            street: '',
            home: 0
        },
        fullName: {
            name: '',
            surname: '',
            patronymic: ''
        },
        extras: {
            hasFavouriteAnimal: 0,
            favouriteAnimal: 'cat',
            hasFavouriteEat: 0,
            favouriteEat: 'pizza',
            canSendPersonalInfo: false
        },
        passwords: {
            password: '',
            repeatPassword: ''
        }
    }
});


const [ login ]  = defineField('login');
const [ email ]  = defineField('email');
const [ phone ]  = defineField('phone');
const [ country ]  = defineField('address.country');
const [ city ]  = defineField('address.city');
const [ street ]  = defineField('address.street');
const [ home ]  = defineField('address.home');
const [ name ]  = defineField('fullName.name');
const [ surname ]  = defineField('fullName.surname');
const [ patronymic ]  = defineField('fullName.patronymic');
const [ hasFavouriteAnimal ]  = defineField('extras.hasFavouriteAnimal');
const [ favouriteAnimal ]  = defineField('extras.favouriteAnimal');
const [ hasFavouriteEat ]  = defineField('extras.hasFavouriteEat');
const [ favouriteEat ]  = defineField('extras.favouriteEat');
const [ canSendPersonalInfo ]  = defineField('extras.canSendPersonalInfo');
const [ password ]  = defineField('passwords.password');
const [ repeatPassword ]  = defineField('passwords.repeatPassword');

const submit = handleSubmit(values => {
    console.log(values)
})

export {
    login,
    email,
    phone,
    country,
    city,
    street,
    home,
    name,
    surname,
    patronymic,
    hasFavouriteAnimal,
    favouriteAnimal,
    hasFavouriteEat,
    favouriteEat,
    canSendPersonalInfo,
    password,
    repeatPassword,
    submit,
    errors,
    values
}