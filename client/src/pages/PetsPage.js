import React from 'react';
import '../App.css';


function PetsPage() {
    return (
        <div className="App">
            <h1>Search or Create Pets</h1>
            <table id="SearchPets">
                <thead>
                    <th>Find Pets</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="petName" /></td>
                        <td>Species:</td>
                        <td><input type="text" name="petSpecies" /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="petBreed" /></td>
                        <td>Birth Year:</td>
                        <td><input type="number" name="petBirthYear" /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="petBirthMonth" /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="petBirthDay" /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="petWeight" /></td>
                        <td>Sex:</td>
                        <td><input type="text" name="petSex" /></td>
                    </tr>
                    <tr>
                        <td>Owner Name:</td>
                        <td><input type="text" name="petOwner" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Search</button>
            <button>View All</button>

            <table id="CreatePet">
                <thead>
                    <th>Create New Pet</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="petName" /></td>
                        <td>Species:</td>
                        <td><input type="text" name="petSpecies" /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="petBreed" /></td>
                        <td>Birth Year:</td>
                        <td><input type="number" name="petBirthYear" /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="petBirthMonth" /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="petBirthDay" /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="petWeight" /></td>
                        <td>Sex:</td>
                        <td><input type="text" name="petSex" /></td>
                    </tr>
                    <tr>
                        <td>Owner Name:</td>
                        <td><input type="text" name="petOwner" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Create</button>
        </div>
    );
}

export default PetsPage;