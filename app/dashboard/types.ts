export interface IData {
    _id: string
    img: string
    title: string
    desc: string
    avatar: string
    content: string
}

export interface FormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement
    desc: HTMLInputElement
    image: HTMLInputElement
    textPost: HTMLTextAreaElement
}

export interface CustomFormElement extends HTMLFormElement {
    readonly elements: FormElements

}
