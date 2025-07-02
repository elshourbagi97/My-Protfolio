import InfiniteScroll from '../../ReactBites/InfiniteScroll/InfiniteScroll';
import "./skills.scss";


export default function Skills(){
    const items = [
  { content: "./html.png" },
  { content: "./css.png" },
  { content: "./scss.png" },
  { content: "./js.png" },
  { content: "./react.png" },
  { content: "./tailwind.png" },
  { content: "./bootstrap.png" },
  { content: "./mysql.png" },
  { content: "./php.png" },
  { content: "./lavarel.png" },
  { content: "./github.png" },
];
    return(
        <div className="skillContent">
            <h3>Skills</h3>
            <div className="skill" >
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={1.2}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />
            </div>
            <div className="line skillLine" ></div>
        </div>
    )
}