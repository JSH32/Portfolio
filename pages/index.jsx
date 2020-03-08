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

Index.getInitialProps = async () => {
  const res = await fetch('http://192.168.1.9:3000/api/hello')
  const data = await res.json()
  return { data: data }
}

export default Index;