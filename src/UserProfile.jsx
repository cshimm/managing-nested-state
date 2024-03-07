import {useState} from "react";

export const UserProfile = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'name',
        email: 'email',
        address: {
            street: 'street',
            city: 'city',
            country: 'country'
        }
    });
    const updateAddress = (street, city, country) => {
        // I can achieve immutability by creating a new object literal from properties of the
        // previous state by utilizing the spread operator. This way the state is not being
        // directly mutated. By performing a local mutation we achieve a higher degree of
        // control and predictability in regard to state management.
        setUserProfile({
            ...userProfile,
            address: {...userProfile.address, street, city, country,}
        });
    }

    return (
        <div>
            <p>Name: {userProfile.name} Email: {userProfile.email}</p>
            <p>Street: {userProfile.address.street}</p>
            <p>City: {userProfile.address.city}</p>
            <p>Country: {userProfile.address.country}</p>

            <button onClick={() => updateAddress("123", "LA", "USA")}>
                123, LA, USA
            </button>
            <button onClick={() => updateAddress("456", "London", "UK")}>
                456 London, UK
            </button>
            <button onClick={() => updateAddress("789", "Seoul", "S. Korea")}>
                789, Seoul, S. Korea
            </button>
        </div>
    )
}