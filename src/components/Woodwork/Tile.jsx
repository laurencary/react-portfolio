import DiningTable from '../../images/ww/dining_table_final.jpg'
import CoffeeTable from '../../images/ww/coffee_table_final.jpg'
import KitchenWorkspace from '../../images/ww/kitchen_workspace_final.jpg'
import Bench from '../../images/ww/bench_final.jpeg'
import Desk from '../../images/ww/desk_final.jpg'
import TallMonitor from '../../images/ww/tall_monitor_final.jpg'
import ShortMonitor from '../../images/ww/short_monitor_final.jpg'
import PhoneAmp from '../../images/ww/phone_amp_final.jpg'
import Vases from '../../images/ww/vases_final.jpg'
import CheeseCandles from '../../images/ww/cheese_board_candle_final.jpg'
import Frames from '../../images/ww/poster_frames_final.jpg'

const Tile = ({project}) => {
    const materials = project.materials.join(" | ")
    const photoDict = {
        "Dining Table": DiningTable,
        "Coffee Table": CoffeeTable,
        "Kitchen Workspace": KitchenWorkspace,
        "Bench": Bench,
        "Desk": Desk,
        "Tall Monitor Stand": TallMonitor,
        "Short Monitor Stand": ShortMonitor,
        "Phone Amplifier": PhoneAmp,
        "Vases": Vases,
        "Cheese Boards & Candle Holders": CheeseCandles,
        "Poster Frames": Frames
        
    }

    const photo = photoDict[project.name];

    return (
        <article className='no-lines'>
            <span className="image">
                <img src={photo} alt="dining table" />
            </span>
            <div className="tile-text">
                <div className="content">
                    <h2>{project.name}</h2>
                    <p className="tech-list">
                        <strong>{materials}</strong>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Tile