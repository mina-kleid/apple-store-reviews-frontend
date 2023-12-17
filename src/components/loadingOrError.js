export const LoadingOrError = (loading, error) => {
    if (error) {
        return (
            <div>
                <h3> Sorry we encountered an error </h3>
            </div>
        )
    }
    if (loading) {
        return (
            <div>
                <h3> Loading </h3>
            </div>
        )
    }
}