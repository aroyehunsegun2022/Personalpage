
import './stacks.css'


function Stacksfun() {
  return (
    <div>
      <div className="row" id='firststack'>
        <div className="col-2"><img src={require('../assets/aws.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-2"><img src={require('../assets/react2.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-2"><img src={require('../assets/flask.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-2"><img src={require('../assets/python.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-2"><img src={require('../assets/node.webp')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-2"><img src={require('../assets/mysql.png')}  alt="fireSpot"  id='imagesize'/></div>
      </div>

      <div className="row" id="secondstack">

        <div className="col-3"><img src={require('../assets/html.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-3"><img src={require('../assets/css.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-3"><img src={require('../assets/javascript2.png')}  alt="fireSpot"  id='imagesize'/></div>

        <div className="col-3"><img src={require('../assets/jquery.png')}  alt="fireSpot"  id='imagesize'/></div>

       
      </div>
    </div>
  );
}

export default Stacksfun;
