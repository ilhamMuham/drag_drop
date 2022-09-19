import { useEffect, useState } from "react"

import GridLayout from "react-grid-layout"
import data from '../../json/data.json'
import {
    Card,
    Button
} from '../../components'
import {
    Header,
    ContName,
    Container,
    ContButton,
} from './home.container.styled'
const Home = () => {
    const [layout, setLayout] = useState()
    

    const _save = () => {
        localStorage.setItem('layout', JSON.stringify(layout))
    }

    const _change = (e) => {
        setLayout(e)
    }

    useEffect(()=> {
        if (localStorage.getItem('layout')) {
            setLayout(JSON.parse(localStorage.getItem('layout')))
        } else {
            let temp = data.map((ev, i)=> {
                return {
                    i: ev.key, x: i, y: 0, w: 1, h: 2 ,minH: 400, minW: 30
                }
            })
            setLayout(temp)
        }
    },[])

    return (
        <Container>
            <Header>
                <ContName>Ilham Muhamad</ContName>
                <ContButton>
                    <Button
                    color={'black'}
                    bg={'white'}
                    title='Save'
                    onClick={_save}
                    />
                </ContButton>
            </Header>

            <GridLayout
                onLayoutChange={_change}
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={200}
                width={4000}
            >
                {
                    data.map((e, i)=> {
                        return (
                            <div
                            key={e.key}
                            >
                                <Card
                                data={e}
                                />
                            </div>
                        )
                    })
                }
            </GridLayout>
        </Container>
    )
}
export default Home