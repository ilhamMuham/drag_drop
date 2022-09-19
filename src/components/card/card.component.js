import { useEffect, useState } from 'react'
import Button from '../button'
import {
    ImgHeader,
    TextContent,
    ContainerOut
} from './card.component.styled'
const Card = (props) => {
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [sub, setSub] = useState('')
    const [text, setText] = useState('')
    const [button, setButton] = useState('')

    useEffect(()=> {
        let tempImg = props.data.children.find(e=>e.component == 'img')
        let tempContent = props.data.children.find(e=>e.component == 'body').children
        let tempTitle = tempContent.find(e=>e.component == 'title')
        let tempSub = tempContent.find(e=>e.component == 'subtitle')
        let tempText = tempContent.find(e=>e.component == 'text')
        let tempButton = tempContent.find(e=>e.component == 'button')
        setTitle(tempTitle.children)
        setSub(tempSub.children)
        setText(tempText.children)
        setButton(tempButton.children)

        setImg(tempImg.src)
    },[])

    return (
        <ContainerOut>
            <ImgHeader src={img} style={{width:'270px'}}/>
            <div>

                <div>{title}</div>
                <br/>
                <div>{sub}</div>
                <br/>
                <TextContent>{text}</TextContent>
                <br/>
                <Button
                title={button}
                />
            </div>
        </ContainerOut>
    )
}
export default Card