import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
    state = {number : 0}

    createRandomNumber = () => {
        var number = Math.random()*100
            number = Math.ceil(number)
        return number
    }

    update = () => {
        const randomNumber=this.createRandomNumber()
        console.log(randomNumber)
        this.setState({number:randomNumber})
    }


    render() {
        const {number} = this.state
        return(
            <div className='bg'>
                <h1 className='head'>Random Number</h1>
                <p className='para'>Generate a random number in the
                range of O to 100</p>
                <button className='btn' onClick={this.update}>Generate</button>
                <h1>{number}</h1>
            </div>
        )
    }
}

export default RandomNumber