import Button from '../button/Button';
import './form.css';
import Input from '../input/input';

const Form = (props) => {

    const { title, subtitle } = props;

    const getMyName = () => {
        return `My Title ${title}`
    }

    return(
        <form>
            <h1>{getMyName()} {subtitle}</h1>
            <Input name="firstName" label="First Name" />
            <Input name="lastName" label="Last Name" />
            <Input name="email" label="Email" />
            <Button btnText={title} />
        </form>
    )
}

export default Form;