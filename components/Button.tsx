import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
    children: React.ReactNode;
    onPress?: () => void;
    variant?: 'filled' | 'outline';
    className?: string;
};

export default function Button({ children, onPress, variant = 'filled', className = '' }: Props) {
    const base = 'rounded-xl py-3 px-4 items-center';
    const filled = 'bg-[#C9A45C]';
    const outline = 'border border-[#C9A45C] bg-transparent';
    const textFilled = 'text-black font-semibold';
    const textOutline = 'text-[#C9A45C] font-semibold';

    return (
        <Pressable onPress={onPress} className={`${base} ${variant === 'filled' ? filled : outline} ${className}`}>
            <Text className={`${variant === 'filled' ? textFilled : textOutline}`}>{children}</Text>
        </Pressable>
    );
}