  
class Artwork extends React.Component {

    render() {
    let data = this.props.data
    
      return (
        <div>
            <div className="section-title"><span className="iconify" data-icon="icons8:brush" data-inline="false"></span>Artwork</div>
            <div className="columns is-multiline">
                {data.map(data => <div className="column is-half" key={data.potato}><a className="card">{data.potato}</a></div>)}
            </div>
        </div>
      );
    }
  }

export default Artwork;