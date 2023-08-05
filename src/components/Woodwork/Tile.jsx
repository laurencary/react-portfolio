const Tile = ({project}) => {
    const materials = project.materials.join(" | ")
    const photoDict = {
        "Dining Table": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/dining_table_final.jpg",
        "Coffee Table": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/coffee_table_final.jpg",
        "Kitchen Workspace": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/kitchen_workspace_final.jpg",
        "Bench": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/bench_final.jpeg",
        "Desk": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/desk_final.jpg",
        "Tall Monitor Stand": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/tall_monitor_final.jpg",
        "Short Monitor Stand": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/short_monitor_final.jpg",
        "Phone Amplifier": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/phone_amp_final.jpg",
        "Vases": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/vases_final.jpg",
        "Cheese Boards & Candle Holders": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/cheese_board_candle_final.jpg",
        "Poster Frames": "https://lgc-portfolio-images.s3.us-west-1.amazonaws.com/ww/poster_frames_final.jpg"
        
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