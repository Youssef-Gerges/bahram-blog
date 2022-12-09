export default interface ISelectionWrapperProps {
    title: string,
    width?: string,
    link?: {
        text: string,
        to: string
    },
    titleCName?: string,
    separator: boolean,
    children: React.ReactNode
}