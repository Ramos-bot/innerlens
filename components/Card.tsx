import React from 'react';
import { View, Text } from 'react-native';

type Props = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    className?: string;
};

export default function Card({ title, subtitle, children, className = '' }: Props) {
    return (
        <View className={`rounded-2xl bg-[#1A1A1A] p-4 shadow-sm ${className}`}>
            {title ? <Text className="text-lg font-bold text-[#E0E0E0]">{title}</Text> : null}
            {subtitle ? <Text className="text-sm text-[#C9A45C] mt-1">{subtitle}</Text> : null}
            <View className="mt-3">{children}</View>
        </View>
    );
}