import './ArtistsGrid.scss'
//componentes
import CardArtist from "../CardArtist/CardArtist";
import { alfabeto } from '../../../../data/type';

function ArtistsGrid() {
    return (
        <section className='grid-artists'>
            {
                alfabeto.map((letra, key) => (
                    <CardArtist
                        letra={letra}
                        key={key}
                    />
                ))
            }
        </section>
    )
}

export default ArtistsGrid