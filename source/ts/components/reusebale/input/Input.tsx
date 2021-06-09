import * as React from "react"
import {IInputProps} from "../../../../../types/components/reusebale/input/IInput";

const Input: React.FunctionComponent<IInputProps> = (props: IInputProps) => {

    return <input
    value={props.value}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.onChange}

    />

}


export default Input