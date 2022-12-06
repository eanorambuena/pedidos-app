import { Avatar } from "@chakra-ui/react"

const ProfileImage = ({avatarSrc, avatarAlt}) => {
  return (
    <Avatar size="md" name={avatarAlt} src={avatarSrc}/>
  )
}

export default ProfileImage