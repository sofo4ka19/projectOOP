import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
    name?: string
}

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
        alt={'Jane Doe'}
        size="small"
        style={{ 
            backgroundColor: '#87d068',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
        }}
        // {...rest}
    >
        JD
    </AntdAvatar>
  )
}

export default CustomAvatar