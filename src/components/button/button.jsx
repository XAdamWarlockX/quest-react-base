import './button.css';

const Button = (props) => {
    const showAlert = () => {
        alert(`A label desse botão é "${props.label}"`);
    };
    return (
        <>
            <button className="btn" onClick={showAlert}>{props.label}</button>
        </>
    );
};

export default Button;