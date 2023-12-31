"use client"

import { SafeListing, SafeUser } from '@/app/types';
import { Reservation, Listing } from '@prisma/client';
import React, {useMemo} from 'react'
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/Listings/ListingHead";
import {categories} from "@/app/components/navbar/Categories";
import ListingInfo from "@/app/components/Listings/ListingInfo";

interface ListingClientProps {
    reservations?:Reservation[],
    listing:SafeListing & {
        user:SafeUser
    };

    currentUser?:SafeUser | null
}

const ListingClient = ({listing, currentUser}:ListingClientProps  ) => {


    const category = useMemo(()  => {
        return categories.find((item) => item.label === listing.category)
    }, [listing.category])

    return (
      <Container>

          <div className="max-w-screen-lg mx-auto">

              <div className="flex flex-col gap-6">
                  <ListingHead title={listing.title} locationValue={listing.locationValue} imageSrc={listing.imageSrc} id={listing.id}
                  currentUser={currentUser}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">

                      <ListingInfo
                          user={listing.user}
                          category={category}
                          description={listing.description}
                          roomCount={listing.roomCount}
                          guestCount={listing.guestCount}
                          bathroomCount={listing.bathroomCount}
                          locationValue={listing.locationValue}
                      />              </div>
              </div>

          </div>
      </Container>
    )
}

export default ListingClient