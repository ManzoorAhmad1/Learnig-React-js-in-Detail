// const ChildProps = (props) => {
const ChildProps = ({ heading, description }) => {
    return (
        <div>
            {/* <h1>{props.heading}</h1>
            {props.description} */}
            <h1>{heading}</h1>
            {description}
        </div>
    )
}
export default ChildProps;