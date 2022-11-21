export enum CardWidth {
    SMALL,
    LARGE
}
export default interface IImageCardProps {
    img: string,
    style?: ElementCSSInlineStyle,
    width?: CardWidth
    text: {
        author?: string,
        category?: string,
        number?: string,
        title: string,
        description: string,
    }
}