export default function Product({guitar}) {

    console.log(guitar[0].attributes.name)

  return (
    <div>
      url
    </div>
  )

}


export async function getServerSideProps({query: { url }}) {

    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const { data: guitar } = await response.json()

    return {
        props: {
            guitar
        }
    }
}
