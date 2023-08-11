import Chapter from './Chapter';
import TimelineData from './timeline-items'


const Timeline = () => {

    return (
        <div>
            <Chapter title="Career" id="career" items={TimelineData["Career"]} />
            <h1>Career</h1>
            <div>
                <h2>2023 Software Engineer</h2>
                <h2>2019 Analyst</h2>
                <h2>2015 Actuary</h2>
                <h2>2015 Passed FM</h2>
                <h2>2015 Passed P</h2>
                <h2>2015 Actuary</h2>
            </div>
            <h1>Post</h1>
            <div>
                <h2>Saxophone Performance</h2>
                <h2>Biochemistry</h2>
            </div>
            <h1>Childhood</h1>
            <div>
                <h2>Swimming</h2>
                <h2>Music</h2>
                <h2>Math</h2>
                <h3>2010 AP Calc teacher told me about actuarial science</h3>
            </div>
        </div>
    )
}

export default Timeline;