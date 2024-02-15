interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card(props: CardProps) {
  return (
    <div className={`shadow-cards rounded-xl bg-white p-8 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
