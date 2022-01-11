const CardContainer = () => {
    const {
        data,
        isPending,
        error
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <div className="CardContainer">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <CardList data={data} />}
        </div>
    );
}
 
export default CardContainer;