import './FeaturesCard.scss'

type Props = {
    title: string,
    description: string,
    src: string
}

function FeaturesCard({title, description, src}: Props) {
    return (
        <div className="features-card">               
            <div className='wraper-img'>
                <img
                    src={src}
                    alt={"Imagem de " + title}
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeaturesCard