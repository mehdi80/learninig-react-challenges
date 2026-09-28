import type { ReactNode } from 'react';
import { getImageUrl } from './utils.ts';
import { MockData } from './assets/mock-data.ts';

export interface ProfileDetail {
    label: string;
    value: string;
}

export interface Profile {
    id: number;
    name: string;
    imageId: string;
    details: ProfileDetail[];
}

interface ImageProps {
    alt: string;
    src: string;
}

export function Image({ alt, src }: ImageProps) {
    return (<img
        className="avatar"
        src={getImageUrl(src)}
        alt={alt}
        width={70}
        height={70}
    />)
}

export function ListItem({ label, value }: ProfileDetail) {
    return <li>
        <b>{label}: </b>
        {value}
    </li>
}

export function List({ children }: { children: ReactNode }) {
    return <ul>
        {children}
    </ul>
}

export function Profile({ profile }: {profile: Profile}) {
    return <section>
        <h2>
            {profile.name}
        </h2>
        <Image
            alt={profile.name}
            src={profile.imageId}
        />

        <List>
            {profile.details.map((item) => (
                <ListItem key={item.label} {...item} />
            ))}
        </List>
    </section>
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            {
                MockData.map((profile) => (
                    <Profile key={profile.id} profile={profile} />
                ))
            }

        </div>
    );
}
