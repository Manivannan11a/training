import './input.css';

const Input = ({ label, name }) => {

    return (
        <div>
            {label}
            <input
                type="text" className="form-control" name={name} placeholder={label} />
        </div>
    )
}

export default Input;