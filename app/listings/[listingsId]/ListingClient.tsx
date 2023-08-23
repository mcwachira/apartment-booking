"use client"

import { SafeListing, SafeUser } from '@/app/types';
import { Reservation, Listing } from '@prisma/client';
import React from 'react'

interface ListingClientProps {
    reservations?:Reservation[],
    listing:SafeListing & {
        user:SafeUser
    };

    currentUser?:SafeUser | null
}

const ListingClient = () => {


    return (
        <div>

            Listing Client
        </div>
    )
}

export default ListingClient