import { DetailedHTMLProps, HTMLAttributes } from "react"

type ReactTextProps = DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
>

type TextProps = ReactTextProps & {
    lineclamp?: number
}
export const Title = ({
    className: _className, lineclamp, ...props
}: TextProps ) => {
    const className = [
        _className,
        lineclamp,
        'text-8xl font-bold text-center select-none'
    ]
    .filter(Boolean)
    .join(' ')

    return (
        <div
        {...props}
        className={className}
        />
    )
}

export const Text5xl = ({
    className: _className, lineclamp, ...props
}: TextProps ) => {
    const className = [
        _className,
        lineclamp,
        'text-5xl font-bold text-center select-none'
    ]
    .filter(Boolean)
    .join(' ')

    return (
        <div
        {...props}
        className={className}
        />
    )
}

export const Text2xl = ({
    className: _className, lineclamp, ...props
}: TextProps ) => {
    const className = [
        _className,
        lineclamp,
        'text-2xl font-semibold text-center select-none'
    ]
    .filter(Boolean)
    .join(' ')

    return (
        <div
        {...props}
        className={className}
        />
    )
}