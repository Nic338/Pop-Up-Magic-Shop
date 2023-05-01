export const ShopItem = ({propItem}) => {
    return <>
        <section key={propItem.id}>
        <header>{propItem.name}</header>
        </section>
    </>
}