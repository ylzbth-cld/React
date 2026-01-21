function Employee(props) {
    return (
        <>
            <h3> Employee {props.name}</h3>
            <p>{props.role ? props.role : "no role"}</p>
            <p>{props.experience ? props.experience : "no experience"}</p>
        </>
    );
}

export default Employee;