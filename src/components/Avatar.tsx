import React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'

interface IAvatarProps {
    src: string;
    altText: string;
    fallbackText: string;
}

const Avatar = ({ src, altText, fallbackText }: IAvatarProps) => {
    return (
        <RadixAvatar.Root className="h-8 w-8 inline-flex items-center justify-center rounded-full">
            <RadixAvatar.Image
                className="object-cover w-full h-full rounded-[inherit]"
                src={src}
                alt={altText}
            />
            <RadixAvatar.Fallback delayMs={600}>{fallbackText}</RadixAvatar.Fallback>
        </RadixAvatar.Root>
    )
}

export default Avatar