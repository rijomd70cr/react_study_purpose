import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

type Props = {
    content?: any,
    overlap?: any,
    style?: object,
    image?: any,
    name?: string
}

export const UserAvatar = ({ content, overlap = "circular", style, image, name }: Props) => {

    const makeChar = (fullName: string) => {
        const words = fullName.split(" ");
        let initials = "";
        for (const word of words) {
            if (word.length > 0) {
                initials += word[0];
            }
        }
        return initials;
    }

    return (
        <div>
            <Badge
                overlap={overlap}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={content}
            >
                <Avatar sx={style}>
                    {name ? makeChar(name) : image}
                </Avatar>
            </Badge>
        </div>
    )
}