import React from 'react';
import PetsRow from './PetsRow';          

function PetsTable( {pets, deletePet} ) {

    return (
        <table class="displayTable">
            <caption>Pets</caption>
            <thead>
                <th>Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Birth Year</th>
                <th>Birth Month</th>
                <th>Birth Day</th>
                <th>Weight</th>
                <th>Sex</th>
                <th>Client</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {pets.map((pet, i) => <PetsRow pet={pet}
                        deletePet={deletePet} key={i} />)}   
            </tbody>
        </table>
    );

};

export default PetsTable;