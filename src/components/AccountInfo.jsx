import './AccountInfo.css'
function AccountInfo(props) {
    return <li className="acc-info">
        <i className="far fa-user"></i>
        <span>{props.user.username}</span>
    </li>
}
export default AccountInfo