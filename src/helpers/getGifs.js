export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DGYR8WkeghUffa7swp2yZjTimD8Ph5LF&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const { data } =  await resp.json();

    const gifs = data.map( element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images.downsized_medium.url,
        }
    } )

    return gifs;
}