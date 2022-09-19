import {
    Buttonclick
} from './button.component.styled'

const Button = (props) => {
    return (
        <Buttonclick
        color={props.color}
        bg={props.bg}
        onClick={props.onClick}
        >
            {props.title || 'Submit'}
        </Buttonclick>
    )
}
export default Button