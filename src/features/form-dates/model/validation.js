import {useForm} from "vee-validate";
import {date, number, object, string} from "yup";

const { handleSubmit, values, errors, defineField } = useForm({
    validationSchema: object({
        personalInfo: object({
            birthday: date().required("This field is required").typeError("This field is required"),
            age: number().required("This field is required").min(18, "You are not 18 years old").max(100, "You can`t be so old").typeError("This field is required")
        }),
        currentDate: date().required().typeError("This field is required"),
        currentMonth: date().required().typeError("This field is required"),
        currentWeek: string().required("This field is required"),
        currentTime: string().required("This field is required"),
    }),
    initialValues: {
        personalInfo: {
            birthday: null,
            age: 1
        },
        currentDate: "",
        currentMonth: "",
        currentWeek: "",
        currentTime: "",
    }
});

const [ birthday ] = defineField('personalInfo.birthday');
const [ age ] = defineField('personalInfo.age');
const [ currentDate ] = defineField('currentDate');
const [ currentMonth ] = defineField('currentMonth');
const [ currentWeek ] = defineField('currentWeek');
const [ currentTime ] = defineField('currentTime');

const submit = handleSubmit(values => {
    console.log(values);
})

export {
    submit,
    values,
    errors,
    birthday,
    age,
    currentDate,
    currentMonth,
    currentWeek,
    currentTime,
}