
interface FooterProps {
    title:string
}

export const Footer = ({title}: FooterProps) => {
    return(
      <footer className="p-4">
        <div className="grid place-content-center">
          <h1 className="font-[200]">{title}</h1>
        </div>
      </footer>
    )
}