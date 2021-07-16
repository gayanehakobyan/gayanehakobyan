import * as React from "react"
import {IButtonProps} from "../../../../../types/components/reusebale/button/IButton";



const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {

    function onClick(e: React.SyntheticEvent): void
    {
        if (props.onClick)
        {
            props.onClick(e);
        }
    }

    return <button onClick={onClick} disabled={props.disabled} className={props.className? props.className : ""}>
             {props.text}
            </button>

}


export default Button