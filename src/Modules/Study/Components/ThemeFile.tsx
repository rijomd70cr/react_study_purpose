import React from 'react';
import { TextInput } from 'Components/FormElements/FormText';

type Props = {}

export const ThemeFile = (props: Props) => {
    const [email, setEmail] = React.useState<string>("");

    return (
        <TextInput
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
    )
}