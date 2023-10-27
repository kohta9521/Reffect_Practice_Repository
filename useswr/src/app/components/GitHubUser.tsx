'use client'
import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json())
type Props = { login: string } // components props type
type Data = { name: string } // fetch'es date type

export const GitHubUser = ({ login }: Props) => {
    const url = `https://api.github.com/users/${login}`
    const { data, error, isLoading } = useSWR(url, fetcher)

    if (error) return <div>Failed to load!</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <p>
            your GitHub name : {data.name}
            </p>
            <p>
            your Location : {data.location}
            </p>
        </div>
    )
}