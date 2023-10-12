import { ReactNode } from 'react';
import { Content, Icon, Text } from './styled';

interface Content {
    icon: ReactNode
    title: string
    description: string
}


export function IconMain(props:Content ) {
    return (
        <Content>
            <Icon>
                {props.icon}
            </Icon>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Text>
        </Content>


    )
}
