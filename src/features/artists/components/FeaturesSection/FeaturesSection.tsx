import './FeaturesSection.scss'
//imagens
import ImgPeople from '../../assets/people.svg'
import ImgStar from '../../assets/start.svg'
import ImgHeart from '../../assets/heart.svg'
//componente
import FeaturesCard from '../FeaturesCard/FeaturesCard'
import type { recordContentFeaturesType } from './type'

function FeaturesSection() {
    const contentFeatures: recordContentFeaturesType = {
        representation: {
            title: "Representatividade",
            description: "Destaque para talentos que transformam o mundo.",
            src: ImgPeople
        },
        history: {
            title: "História",
            description: "Conheça trajetórias que inspiram gerações.",
            src: ImgStar
        },
        culture: {
            title: "Cultura",
            description: "Arte, música, ciência e muito mais, de A a Z.",
            src: ImgHeart
        }
    }
    return (
        <section className='features-section'>
            <FeaturesCard
                title={contentFeatures.representation.title}
                description={contentFeatures.representation.description}
                src={contentFeatures.representation.src}
            />
            <div className="line"></div>
            <FeaturesCard
                title={contentFeatures.history.title}
                description={contentFeatures.history.description}
                src={contentFeatures.history.src}
            />
            <div className="line"></div>
            <FeaturesCard
                title={contentFeatures.culture.title}
                description={contentFeatures.culture.description}
                src={contentFeatures.culture.src}
            />
        </section>
    )
}

export default FeaturesSection