import './ArtistsGrid.scss'
//componentes
import CardArtist from "../CardArtist/CardArtist";

function ArtistsGrid() {
    const alfabeto: string[] = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ];
    return (
        <div className='grid-artists'>
            {
                alfabeto.map((letra) => (
                    <CardArtist
                        letra={letra}
                    />
                ))
            }
        </div>
    )
}

export default ArtistsGrid