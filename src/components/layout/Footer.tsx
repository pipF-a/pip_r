
interface FooterProps {
    title:string
}

export const Footer = ({title}: FooterProps) => {
    return(
      <footer className="border-b-1 border-gray-100 p-4 bg-[image:var(--notebg02)] bg-center bg-repeat bg-[size:15px_15px]">
        <div className="grid place-content-center">
          <h1 className="font-[200]">{title}</h1>
        </div>
      </footer>
    )
}