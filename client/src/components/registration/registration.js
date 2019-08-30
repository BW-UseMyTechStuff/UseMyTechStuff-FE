import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addUser } from '../../store/actions';
import '../../styles/registration.css';


const Registration = (props) => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: ''
    })

    const changeHandler = event => {
        event.preventDefault();
        console.log(event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.addUser(user)
        props.history.push('/protected');
          console.log('reg: ',props.history)
      }

    return (
        <div className='reg-page'>
            <div className='reg-top'>
            <h4>umts</h4>
            </div>
            <form className='form'>
            <h2>Join</h2>
                <div className='reg-form'>
                    <p className='reg-input'>
                        <label>Username</label>
                        <input type="text" name="username" onChange={changeHandler} value={user.username} required /></p>
                    <p className='reg-input'>
                        <label>Email</label>
                        <input type="email" name="email" onChange={changeHandler} value={user.email} required/></p>
                    <p className='reg-input'>
                        <label>Password</label>
                        <input type="password" name="password" onChange={changeHandler} value={user.password} required/>
                    </p>
                    <p className='reg-input'>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={changeHandler} value={user.confirmPassword} required/>
                    </p>
                    <p className='bday'>
                        <label>Birthday</label>
                        <label>*We require all our users to be 18 or older.</label>
                        <input type="text" name="birthday" onChange={changeHandler} value={user.birthday} required/>
                    </p>
                    <p></p>
                    <div className='checkbox'>
                        <input type='checkbox' name='tos' />
                        <p>I agree to the Terms and Conditions</p>
                    </div>
                        <button type='submit' onClick={handleSubmit} >Join</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    addUser: state.addUser,
    fetchingData: state.fetchingData
  });

  export default connect(  mapStateToProps, { addUser })(Registration);