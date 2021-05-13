// import userEvent from '@testing-library/user-event'
import React from 'react'
import UserStore from '../../stores/UserStore'


class Information extends React.Component {

render() {
 return (
<div>
 <h2>Hello, {UserStore.username}</h2>
</div>
)
 }
}

export default Information