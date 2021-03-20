type Props = {
  name: string
  picture: string
  gitLink: string,
}

export const Avatar = ({ name, picture, gitLink }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <a href={gitLink} target="_blank" rel='noopener noreferrer' className="text-xl font-bold">{name}</a>
    </div>
  )
}
