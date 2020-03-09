  
class Artwork extends React.Component {

    render() {
    let data = this.props.data
    
      return (
        <div>
            <div className="section-title"><span className="iconify" data-icon="icons8:brush" data-inline="false"></span>Artwork</div>
            
            <div className="columns is-multiline">
                <div className="column" style={{'position': 'relative'}}><a className="card"><img style={{maxWidth: "500px"}} src="https://i.nekos.cafe/5mbZBBq.png"/></a></div>
                {data.map(data => <div className="column is-half" key={data.potato}><a className="card">{data.potato}</a></div>)}
            </div>
        </div>
      );
    }
  }

export default Artwork;

// TODO: Image grid
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp