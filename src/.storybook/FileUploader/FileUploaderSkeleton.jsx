import { Fragment } from "react"


const FileUploaderSkeleton = ({
    className,
    ...props
}) => {
    return (
        <Fragment>
            <div className={className} {...props}>

            </div>
        </Fragment>
    )
}