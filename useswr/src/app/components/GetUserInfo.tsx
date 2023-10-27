'use client'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url)

const GetUserInfo = () => {
    const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

    if(error) return <div>Failed to Load</div>
    if(isLoading) return <div>Loading Now...</div>

    return (
        <div>
            Hello, {data.name}!
        </div>
    )
}