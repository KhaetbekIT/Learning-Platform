import PropTypes from "prop-types"

const CardPoint = ({ icon, title, children }) => {
    return <div className="card-point">
        <div className="card-point-top">
            <div className="card-point-icon">
                {icon}
            </div>
            <p className="card-point-title">
                {title}
            </p>
        </div>

        {
            children && <div className="card-point-content">
                {children}
            </div>
        }
    </div>
}

CardPoint.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    children: PropTypes.node
}

export { CardPoint }