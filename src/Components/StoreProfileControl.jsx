import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import StoreProfile from '../Routes/StroeProfile';
import StoreDetails from '../Routes/StoreDetailsPage';

export default function StoreProfileController() {
    const { id } = useParams();
    const { role, allStores } = useOutletContext();
    
    // 1. Find the store data
    const store = allStores.find(s => s.id === Number(id));

    if (!store) return <div className="p-5 text-center">Store not found</div>;

    // 2. Ownership Logic
    // In a real app, 'ownedStoreId' would come from your Auth system.
    // For now, let's assume if role is 'owner', they own the store they just created or ID 1.
    const isActuallyTheOwner = role === 'owner' && (store.id === 1 || store.id > 1700000000000);

    return (
        <>
            {isActuallyTheOwner ? (
                /* The Private Management View */
                <StoreProfile store={store}/>
            ) : (
                /* The Public Social View */
                <StoreDetails store={store} />
            )}
        </>
    );
}