import React from 'react';
import { Button as AntButton} from 'antd'

interface Props {
    onClick: () => void,
    message: string,
}

const Button = (props : Props) => {
    return <AntButton onClick={props.onClick}>{ props.message }</AntButton>
}

export default Button