import {render} from '@testing-library/react'
import {PostCard} from './index'

const mock = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png'
}

describe('<PostCatd/>', ()=> {
    it('should render PostCard correctly', () => {
        render(<PostCard {...mock} />)
    })
})