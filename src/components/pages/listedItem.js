import React from 'react';
// import StarRatingComponent from 'react-star-rating-component'; 
import DayPicker, { DateUtils } from 'react-day-picker';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import 'react-day-picker/lib/style.css';
import '../../styles/itemPage.css';

class ListedItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          rating: 1,
          date: new Date(),
          selectedDays: [],
        };
      }

      onChange = date => this.setState({ date })

      handleDayClick(day, { selected }) {
        const { selectedDays } = this.state;
        if (selected) {
          const selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
          );
          selectedDays.splice(selectedIndex, 1);
        } else {
          selectedDays.push(day);
        }
        this.setState({ selectedDays });
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
     
      render() {
        // const { rating } = this.state;
        console.log('I:',this.state)
    return (
        <div className='item-page'>
            <div className='item-top'>
                <h1>Bluetooth Party Speakers</h1>
                <div className='item-sku'>
                    <h3>Model: 65RT21T</h3>
                    <h3>SKU: TLA800</h3>
                </div>
                <div className='item-rating'>
                <Rater total={5} rating={2} />
                    {/* <StarRatingComponent
                        selectedDays={this.state.selectedDays}
                        onDayClick={this.handleDayClick}
                        name="rate1" 
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    /> */}
                    <h2>$52/night</h2>
                </div>
            </div>
            <button className='button'>RENT</button>
            <div className='item-info'>
                <img src={process.env.PUBLIC_URL + "/img/bluetooth-speaker.png"} alt='placeholder'/>
                <ul className='item-info-list'>
                    <li>High Power audio system</li>
                    <li>Bluetooth compatibility</li>
                    <li>Vibrant speaker lights</li>
                    <li>Ideal for parties</li>
                    <li>Easy to carry</li>
                </ul>
            </div>
            <div className='item-description'>
                <p>Warranty Details: 2 years (end in 2021)</p>
                <p>I received these speakers as a birthday gift a couple months ago in April. I had so many friends lend these party speakers from me so I thought to share them with everyone else who may be interested! They are great for parties and larger events like conferences.</p>
            </div>
            <h3>Select Days</h3>
            <div className='calendar'>
                <main className='calendar-content'>
                <DayPicker
                    selectedDays={this.state.selectedDays}
                    onDayClick={this.handleDayClick}
                />
                </main>
            </div>
            <div className='item-message'>
                <img src='https://via.placeholder.com/100'alt='placeholder'/>
                <h4>Message Lender</h4>
            </div>
        </div>
    )
}
}
export default ListedItem