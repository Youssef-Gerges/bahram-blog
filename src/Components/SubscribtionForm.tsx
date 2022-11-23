import React from 'react'
import './SubscribtionForm.scss'

const SubscribtionForm: React.FC = () => {
    return (
        <section className='container sub-form'>
            <h1>Get free web design insights...</h1>
            <p className='title-small'>In your inbox, every other week. And unsubscribe in a click, if you want.</p>
            <section className='container'>
                <div className="input-group">
                    <input type="email" className="input-email" placeholder='Email' />
                    <button>Subscribe</button>
                </div>
            </section>
        </section>

    )
}

export default SubscribtionForm