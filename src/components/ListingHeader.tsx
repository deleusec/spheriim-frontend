interface ListingHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
}

function ListingHeader(props: ListingHeaderProps) {
    return ( 
        <div className="w-full p-8">
            <h1>{props.title}</h1>
            {props.subtitle && <h2 className="text-primary font-semibold mt-1">{props.subtitle}</h2>}
            {props.description && <p className="text-sm text-dark mt-4 max-w-[500px]">{props.description}</p>}
        </div>
     );
}

export default ListingHeader;