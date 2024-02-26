'use client';

import React, {createContext, useContext, useReducer, useState} from 'react';

import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

export default function ReactQueryProvider({children}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}