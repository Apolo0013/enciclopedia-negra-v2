import './IntroPage.scss'

type Props = {
    title: string,
    description: string
}

function IntroPage({description, title}: Props) {
    return (
        <div className="wraper-intro-page">
            <div className='intro-page'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default IntroPage