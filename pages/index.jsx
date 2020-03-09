import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Artwork from '../components/Artwork'

const Index = (props) => (
  <Layout>
      
    <div className="main">
        <section className="home-section">
          <Artwork data={props.data}/>
        </section>
    </div>
    
  </Layout>
);

Index.getInitialProps = async ({req}) => {
  const res = await fetch('https://8081.cobalt.live/api/hello')
  const data = await res.json()
  return { data: data }
}

export default Index;