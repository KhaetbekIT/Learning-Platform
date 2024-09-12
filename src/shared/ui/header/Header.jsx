import { Badge } from "antd"
import PropTypes from "prop-types"
import { Search } from "../search/Search"
import { Typography } from "../typography/Typography"
import { Icons } from "../icon/Icons"

const Header = ({ title }) => {
    return <header className="flex items-center gap-5">

        <Typography name={"h1"}>{title}</Typography>

        <div className="flex gap-5 justify-end flex-grow">
            <Search data={[{ label: "ok" }]} />

            <Badge count={3}>
                <Icons className={"text-black"} name={"bell"} />
            </Badge>

            <Icons className={"text-black"} name={"settings"} />
        </div>
    </header>
}

Header.propTypes = {
    title: PropTypes.string
}

export { Header }