export type recordContentFeaturesType = {
    representation: contentFeaturesType,
    history: contentFeaturesType,
    culture: contentFeaturesType
}

type contentFeaturesType = {
    title: string,
    description: string,
    src: string
}