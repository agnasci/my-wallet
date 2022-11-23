import React from "react";

import { Container } from './styles'

type Props = {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

const MessageBox: React.FC<Props> = ({
    title,
    description,
    footerText,
    icon,
}) => {
    return (
        <>
            <Container>
                <header>
                    <div>
                        <h1>
                            {title}
                        </h1>
                        
                        <img src={icon} alt={title} />
                    </div>

                    <p>{description}</p>
                </header>
                <footer>
                    <p>{footerText}</p>
                </footer>
            </Container>
        </>
    )
}

export default MessageBox