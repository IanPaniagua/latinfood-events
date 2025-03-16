// the diference between template and Layout
// is tha the template renders every time

export default async function Template ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // TODO: Create animation appear
        <div className="animate-appear">
                {children}
        </div>
    )
}