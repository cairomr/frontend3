function InputComponent({ title, type, value, fnOnChange }) {
    return (
        <>
            <label>{title ?? "Indefinido"} </label>
 

            <input
                type={type ?? "text"}
                value={value}
                onChange={fnOnChange}
            />
            <br />
        </>
    );
}

export default InputComponent;