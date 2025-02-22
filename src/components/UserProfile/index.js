import './index.css'

const UserProfile = props => {
  const {userDetails, onDeleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails
  const onDelete = () => {
    onDeleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="button" onClick={onDelete}>
        x
      </button>
    </li>
  )
}
export default UserProfile
